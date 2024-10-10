// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
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
    const image = document.querySelector(".hero div.img"); // Target the image
    if (window.scrollY > 25) {
      image.classList.add("move-out");
    } else {
      image.classList.remove("move-out");
    }
  });
  
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});