function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (const cookie of cookieArr) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

const token = getCookie('token');
if (!token) {
    window.location.href = "index.html";
}

function getPlaceIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('place_id');
}

const placeId = getPlaceIdFromURL();
const placeNameElement = document.getElementById("place-name");
const messageDiv = document.getElementById("message");

if (!placeId) {
    messageDiv.textContent = "Error: No place ID found in the URL.";
    messageDiv.style.color = "red";
} else {
    placeNameElement.textContent = `Add Review for Place ID: ${placeId}`;
}

const form = document.getElementById("review-form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const reviewText = document.getElementById("review").value.trim();
    const rating = document.getElementById("rating").value;

    if (!reviewText || !rating) {
        messageDiv.textContent = "Please fill in all fields.";
        messageDiv.style.color = "red";
        return;
    }

    try {
        const response = await fetch(`https://api.example.com/places/${placeId}/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                review: reviewText,
                rating: parseInt(rating)
            })
        });
    
        if (response.ok) {
            messageDiv.textContent = "Your review was submitted successfully!";
            messageDiv.style.color = "green";
            form.reset();
        } else {
            const errorData = await response.json();
            messageDiv.textContent = `Error: ${errorData.message || 'Unable to submit review.'}`;
            messageDiv.style.color = "red";
        }
    } catch (error) {
        console.error('Submission error:', error);
        messageDiv.textContent = 'Network error: Please try again later.';
        messageDiv.style.color = "red";
    }
    });