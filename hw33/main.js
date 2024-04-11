import { images } from './store.js';

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("section");
    section.innerHTML = `
        <h1>
            Gallery
        </h1>
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        ${images.reduce((html, img) => {
            return html + `<li><img src="${img.src}" alt="${img.alt}" data-year="${img.year}" class="object-cover w-full h-full"></li>`;
        }, '')}
        </ul>
    `;

    const imgs = document.querySelectorAll('.object-cover');
    if (imgs) {
        imgs.forEach((img, index) => {
            img.addEventListener('click', function () {
                const image = images[index];
                openModal(image.src, image.alt, image.year);
            });
        });
    }

    function openModal(src, alt, year) {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 wrapper">
                <div class="bg-white p-6 rounded-lg shadow-lg relative modalImg">
                    <img src="${src}" alt="${alt}" class="w-full max-w-96 h-auto rounded-md">
                    <div class="flex items-center mt-2 text-black justify-between font-semibold">
                        <p>${alt}</p>
                        <p>${year} year</p>
                    </div>
                    <button class="absolute top-1 right-1 text-lg text-black hover:text-gray-300 focus:outline-none">&times;</button>
                </div>
            </div>
        `;
    
        document.body.appendChild(modal);
    
        const wrapper = modal.querySelector('.wrapper');
        const modalImg = modal.querySelector('.modalImg');
    
        modal.querySelector('button').addEventListener('click', () => {
            modal.remove();
        });
    
        document.addEventListener('keydown', closeModal);
    
        function closeModal(event) {
            if (event.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', closeModal);
            }
        }
    
        wrapper.addEventListener("click", (event) => {
            if (event.target === wrapper) {
                modal.remove();
                document.removeEventListener('keydown', closeModal);
            }
        });
    
        modalImg.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    }    
});
