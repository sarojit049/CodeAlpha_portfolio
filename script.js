(function () {
    emailjs.init("gjCAjkpSLrShKVIUk");
})();
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Toggle menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click + smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navMenu.classList.remove('active');

        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll padding effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.padding = window.scrollY > 50 ? '0.8rem 0' : '1.2rem 0';
});

//form
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
// STEP 1: Validate form using HTML5 validation
    if (!contactForm.checkValidity()) {
        formStatus.textContent = "Please fill all fields correctly.";
        formStatus.style.color = "red";
        return; // STOP sending if invalid
    }
    emailjs.sendForm(
        "service_guvedss",
        "template_7z4vupp",
        this
   ).then(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
    }).catch(() => {
        formStatus.textContent = "Failed to send message. Try again!";
        formStatus.style.color = "red";
        console.error("EmailJS Error:", error);
    });
});
