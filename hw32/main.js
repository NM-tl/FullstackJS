// Task 1
{
    document.addEventListener("DOMContentLoaded", () => {
        const categoriesList = document.querySelectorAll('#categories .card');
        const numberOfCategories = categoriesList.length;

        if(categoriesList) {
            console.log(`Number of Categories: ${numberOfCategories}\n`);
    
            categoriesList.forEach(category => {
                const categoryName = category.textContent.trim();
                const categoryItems = category.querySelectorAll('ul li');
                const numberOfItems = categoryItems.length;
        
                const longestElement = [...categoryItems]
                    .map(item => item.textContent.trim())
                    .reduce((currentLongestElement, currentElement) => currentLongestElement.length > currentElement.length ?
                    currentLongestElement : 
                    currentElement, '');
        
                console.log(`Category: ${categoryName}\nElements: ${numberOfItems}\nLongestElement: ${longestElement}\n`);

                category.innerHTML += `
                    <div class="badge badge-info gap-2 absolute right-5 top-3">
                        Items: ${numberOfItems}
                    </div>
                `;          
            });   
        }   
    });
}

// Task 2
import { images } from './store.js';
{
    document.addEventListener("DOMContentLoaded", () => {
        const sectionTitle = document.querySelector("h1");
        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid', 'grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'gap-5', 'mt-5');
        sectionTitle.insertAdjacentElement('afterend', gridContainer);
    
        images.forEach(image => {
            gridContainer.innerHTML += `
                <div class="col-span-1 game">
                    <img src="${image.src}" alt="${image.alt}" class="w-full h-full object-cover">
                </div>
            `;
        });

        // Added shuffle trigger

        function shuffle(array) {
            return [...array].sort(() => Math.random() - 0.5);
        }

        gridContainer.addEventListener('click', () => {
            const shuffledImages = shuffle(Array.from(gridContainer.querySelectorAll('.game img')));
            shuffledImages.forEach((image, index) => {
                image.parentNode.style.order = index + 1;
            });
        });
    });
}