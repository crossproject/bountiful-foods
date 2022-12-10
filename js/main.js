// Set new Date
const date = new Date();

// Show-Hide Menu
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("display-menu");
}
const menuBtn = document.getElementById("menu-btn");
menuBtn.onclick = toggleMenu;

// Write Total Mixed
try {
    let actualStorageValue = window.localStorage.getItem("times-mixed");
    let totalMixed = document.getElementById("mixes");
    if (actualStorageValue == null){
        totalMixed.innerHTML = "It seems that you have not made a mix yet. Try it now!"
    } else {
        totalMixed.innerHTML = `You mixed ${actualStorageValue} times`
    };
} catch (error) {
    console.log(error);
}


// Footer Year
const year = document.querySelector("#year");
year.innerHTML = date.getFullYear();

// Last modified date
const updatedDate = document.querySelector("#updated-date");
updatedDate.innerHTML = document.lastModified;