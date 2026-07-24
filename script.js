// Mobile Menu
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Show Only One Section
function showSection(id) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

    // Close mobile menu after click
    navLinks.classList.remove("active");
}

// Default Page
showSection("home");