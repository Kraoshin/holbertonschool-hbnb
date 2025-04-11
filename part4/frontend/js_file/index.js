document.addEventListener('DOMContentLoaded', checkAuthentication());

document.getElementById('price-filter').addEventListener('change', () => {
    const selectPrice = document.getElementById('price-filter').value;
    const places = document.querySelectorAll('.place-card')
  
    places.forEach(card => {  
      const value = parseInt(card.querySelector('p').textContent.replace('Price: ', ''),10);
  
      if (selectPrice === 'all' || value <= parseInt(selectPrice, 10)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
    }
  });
})

function checkAuthentication() {
    const token = getCookie('token');
    const loginLink = document.getElementById('login-button')
    const logoutLink = document.getElementById('logout-button')
  
    if (!token) {
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    } else {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
        fetchPlaces(token);
    }

    if (logoutLink) {
      logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); 
        deleteCookie();
        window.location.href = "login.html"; 
      });
    }
}

function getCookie(name) {
  const cookie = document.cookie
  .split("; ")
  .find((row) => row.startsWith(name))
  ?.split("=")[1];
  return cookie
}

function deleteCookie(){
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

async function fetchPlaces(token) {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/v1/places/');
    const places = await response.json();
    displayPlaces(places);
  } catch (error) {
    console.error('try again:' + error );
  }
}

function displayPlaces(places) {
    const placeList = document.getElementById('places-list');
    placeList.innerHTML = '';
  
    places.forEach(place => {
      const placeCard = document.createElement('div');
      placeCard.className = 'place-card';
      placeCard.innerHTML = `
        <h3 class="title-card">${place.title}</h3>
        <p class="space-card">Price: ${place.price}</p>
        <a href="place.html?id=${place.id}">
        <button class="details-button">Views details</button>
        </a>
      `;
      placeList.appendChild(placeCard);
    });
}
