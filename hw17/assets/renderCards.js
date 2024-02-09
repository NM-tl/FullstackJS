import { products } from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    
    if (productsContainer && products) {
        const productsHTML = products.map(({ title, description, price, discount, img }) => `
            <div class="w-full max-w-60 h-fit flex flex-col gap-6 items-center">
                <img 
                    src="${img}" 
                    alt="product"
                    class="h-full max-h-72 w-full"
                />
                <div class="flex flex-col gap-2 items-center">
                    <h5 class="text-base font-semibold text-main">${title}</h5>
                    <span class="text-secondary text-sm font-semibold">${description}</span>
                    <div class="flex items-center gap-1">
                        <span class="font-semibold text-muted">$${price}</span>
                        <span class="font-semibold text-accent">$${discount}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center rounded-full bg-sky-500 px-2 py-2"></span>
                        <span class="inline-flex items-center rounded-full bg-green-800 px-2 py-2"></span>
                        <span class="inline-flex items-center rounded-full bg-orange-500 px-2 py-2"></span>
                        <span class="inline-flex items-center rounded-full bg-green-800 px-2 py-2"></span>
                    </div>
                </div>
            </div>
        `).join(''); 

        productsContainer.innerHTML = productsHTML;
    }
});