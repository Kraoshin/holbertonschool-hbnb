function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
document.addEventListener("DOMContentLoaded", () => {
    const token = getCookie('token');

    if (!token) {
        window.location.href = "login.html";
    } else {
        loadMainContent();
    }
    document.getElementById("logout").onclik = function() {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "login.html";
    }
});