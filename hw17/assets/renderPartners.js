import { partners } from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
    const partnersContainer = document.querySelector('.partners');
    
    if (partnersContainer && partners) {
        const partnersHTML = partners.map(({ img }) => `
            <img 
                src="${img}" 
                alt="partner"
                class='duration-400 cursor-pointer transition-all hover:scale-105 hover:brightness-0'
            />
        `).join(''); 

        partnersContainer.innerHTML = partnersHTML;
    }
});