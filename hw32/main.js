// Task 1
{
    document.addEventListener("DOMContentLoaded", () => {
        const categoriesList = document.querySelectorAll('#categories .card');
        const numberOfCategories = categoriesList.length;
    
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
        });
    });
}