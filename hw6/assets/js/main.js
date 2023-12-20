document.addEventListener('DOMContentLoaded', () => {
    // sticky nav

    const nav = document.querySelector('.navigation');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // anchor smooth scroll

    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});