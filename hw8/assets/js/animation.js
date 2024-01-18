document.addEventListener("DOMContentLoaded", () => {
    const sectionsToAnimate = [
        {
            section: document.querySelector('.about__wrapper'),
            elements: [
                document.querySelector('.about__wrapper img'),
                document.querySelector('.about__content')
            ],
            animations: ['animate__fadeInLeft', 'animate__fadeInRight']
        },
        {
            section: document.querySelector('.pricing__wrapper'),
            elements: [
                document.querySelector('.pricing__content'),
                document.querySelector('.cards__wrapper')
            ],
            animations: ['animate__fadeInUp', 'animate__fadeInUp animate__delay-1s']
        },
        {
            section: document.querySelector('.network__wrapper'),
            elements: [
                document.querySelector('.network__content .title'),
                document.querySelector('.network__content .text'),
                document.querySelector('.network__wrapper img')
            ],
            animations: ['animate__fadeInUp', 'animate__fadeInUp animate__delay-1s', 'animate__zoomIn animate__delay-2s']
        },
        {
            section: document.querySelector('.subscribe__wrapper'),
            elements: [
                document.querySelector('.subscribe__wrapper')
            ],
            animations: ['animate__fadeInUp animate__delay-2s']
        }
    ];

    const clientsItems = document.querySelectorAll('.clients__wrapper ul li');

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
                        client.classList.add('show', 'animate__animated', 'animate__zoomIn');
                    }, delay);
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(document.querySelector('.clients__wrapper ul'));

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionsToAnimate.forEach(sectionData => {
                    if (entry.target.classList.contains(sectionData.section.classList[0])) {
                        sectionData.section.classList.add('visible');
                        sectionData.elements.forEach((element, index) => {
                            element.classList.add('animate__animated', ...sectionData.animations[index].split(' '));
                        });
                    }
                });
            }
        });
    }, options);

    sectionsToAnimate.forEach(sectionData => {
        sectionObserver.observe(sectionData.section);
    });
});