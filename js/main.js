// Set new Date
const date = new Date();

// Show-Hide Menu
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("display-menu");
}
const menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = toggleMenu;

// Footer Year
const year = document.querySelector("#year");
year.innerHTML = date.getFullYear();

// Last modified date
const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;