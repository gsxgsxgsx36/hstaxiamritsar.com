// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Dynamic Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Function to add the "move-out" class when the scroll exceeds 25px
window.addEventListener("scroll", function() {
    const image = document.querySelector(".banner div.img"); // Target the image
    if (window.scrollY > 25) {
      image.classList.add("move-out");
    } else {
      image.classList.remove("move-out");
    }
  });

// Hamburger Menu Toggle
document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("open");
    this.classList.toggle("toggle");
});
// Hide Top Bar and Nav Bar on Scroll (combined logic)
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const topBar = document.querySelector(".top-bar");
    const navBar = document.querySelector("header");
    
    if (scrollTop > lastScrollTop) {
        topBar.classList.add("hide"); // Hide top bar when scrolling down
        navBar.classList.add("hide"); // Hide nav bar when scrolling down
    } else {
        topBar.classList.remove("hide"); // Show top bar when scrolling up
        navBar.classList.remove("hide"); // Show nav bar when scrolling up
    }
    lastScrollTop = scrollTop; // Update the last scroll position
});
