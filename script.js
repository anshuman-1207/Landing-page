// ============================
// Smooth Navbar Shadow on Scroll
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
    }
});

// ============================
// Smooth Scrolling
// ============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});