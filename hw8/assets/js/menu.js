document.addEventListener('DOMContentLoaded', function () {
    const menu = {
        'Product': ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
        'Engage': ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
        'Earn Money': ['Affiliate', 'Become Partner'],
    };

    function renderMenu() {
        const footerMenu = document.querySelector('.footer__menu');

        for (const [category, items] of Object.entries(menu)) {
            const categoryDiv = createCategoryDiv(category, items);
            footerMenu.appendChild(categoryDiv);
        }
    }

    function createCategoryDiv(category, items) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu__list');

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category;

        const categoryList = createItemList(items);

        categoryDiv.appendChild(categoryHeading);
        categoryDiv.appendChild(categoryList);

        return categoryDiv;
    }

    function createItemList(items) {
        const categoryList = document.createElement('ul');
    
        items.forEach(item => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
    
            anchor.textContent = item;
            anchor.href = '#';
    
            listItem.appendChild(anchor);
            categoryList.appendChild(listItem);
        });
    
        return categoryList;
    }    

    renderMenu();
});