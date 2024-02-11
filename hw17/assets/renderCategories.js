import { categories } from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.querySelector('.categories');
    
    if (categoriesContainer && categories) {
        const categoriesHTML = categories.map(({ title, counter, img }) => `
            <div class="w-52 h-56 bg-black flex flex-col items-center justify-center gap-2 bg-[url(${img})] bg-cover bg-no-repeat bg-center transition-transform hover:-translate-y-1 duration-500 cursor-pointer">
                <h4 class="uppercase text-2xl font-semibold">${title}</h4>
                <span class="text-sm">${counter} items</span>
            </div>
        `).join(''); 

        categoriesContainer.innerHTML = categoriesHTML;
    }
});