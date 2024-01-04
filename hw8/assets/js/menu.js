document.addEventListener('DOMContentLoaded', function () {
    const menu = {
        'Product': ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
        'Engage': ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
        'Earn Money': ['Affiliate', 'Become Partner'],
    };

    function renderMenu() {
        const footerMenu = document.querySelector('.footer__menu');

        for (const category in menu) {
            if (menu.hasOwnProperty(category)) {
                const categoryDiv = document.createElement('div');
                categoryDiv.classList.add('menu__list');

                const categoryHeading = document.createElement('h2');
                categoryHeading.textContent = category;

                const categoryList = document.createElement('ul');

                for (const item of menu[category]) {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    categoryList.appendChild(listItem);
                }

                categoryDiv.appendChild(categoryHeading);
                categoryDiv.appendChild(categoryList);

                footerMenu.appendChild(categoryDiv);
            }
        }
    }

    renderMenu();
});