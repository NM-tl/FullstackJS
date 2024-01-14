document.addEventListener("DOMContentLoaded", () => {
    const about = document.querySelector('.about__wrapper');
    const aboutWrapperImg = document.querySelector('.about__wrapper img');
    const aboutContent = document.querySelector('.about__content');
    const pricing = document.querySelector('.pricing__wrapper');
    const pricingContent = document.querySelector('.pricing__content');
    const cards = document.querySelector('.cards__wrapper');
    const network = document.querySelector('.network__wrapper');
    const networkTitle = document.querySelector('.network__content .title');
    const networkText = document.querySelector('.network__content .text');
    const map = document.querySelector('.network__wrapper img');
    const sub = document.querySelector('.subscribe__wrapper');
    
    const clientsItems =  document.querySelectorAll('.clients__wrapper ul li');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                clientsItems.forEach((client, index) => {
                    const delay = 200 * index;
                    setTimeout(() => {
                        client.classList.add('show','animate__animated', 'animate__zoomIn');
                    }, delay);
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(document.querySelector('.clients__wrapper ul'));

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                about.classList.add('visible')
                aboutWrapperImg.classList.add('animate__animated', 'animate__fadeInLeft');
                aboutContent.classList.add('animate__animated', 'animate__fadeInRight');

                pricing.classList.add('visible')
                pricingContent.classList.add('animate__animated', 'animate__fadeInUp');
                cards.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');

                network.classList.add('visible')
                networkTitle.classList.add('animate__animated', 'animate__fadeInUp');
                networkText.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
                map.classList.add('animate__animated', 'animate__zoomIn', 'animate__delay-2s');

                sub.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-2s')
            }
        });
    }, options);

    aboutObserver.observe(document.querySelector('.about'));
});
