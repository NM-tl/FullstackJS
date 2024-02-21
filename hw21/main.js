// Task 1
document.addEventListener("DOMContentLoaded", () => {
    const countries = [
        {
            name: "Ukraine",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Emojione_1F1FA-1F1E6.svg/32px-Emojione_1F1FA-1F1E6.svg.png",
            price: 500,
        },
        {
            name: "Italy",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Emojione_1F1EE-1F1F9.svg/32px-Emojione_1F1EE-1F1F9.svg.png",
            price: 1500,
        },
        {
            name: "Thailand",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Emojione_1F1F9-1F1ED.svg/32px-Emojione_1F1F9-1F1ED.svg.png",
            price: 1000,
        },
    ];

    const container = document.querySelector(".result");
    const budgetForm = document.getElementById("budgetForm");

    budgetForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const userBudget = parseInt(budgetForm.querySelector(".budget").value);
        displaySkeleton();
    
        setTimeout(() => {
            const matchingCountries = findMatchingCountries(userBudget, countries);
            renderResult(matchingCountries, userBudget);
        }, 1500);
    });

    const displaySkeleton = () => {
        container.innerHTML = '<div class="skeleton w-96 h-[220px]"></div>';
    }

    const renderResult = (matchingCountries, userBudget) => {
        container.innerHTML = "";

        matchingCountries.forEach(country => {
            const countryElement = createCountryElement(country, userBudget);
            container.appendChild(countryElement);
        });
    }

    const createCountryElement = (country, userBudget) => {
        const countryElement = document.createElement("div");
        const priceDifference = Math.abs(userBudget - country.price);
    
        countryElement.innerHTML = `
            <div class="card w-96 bg-base-100 shadow-xl ">
                <img src=${country.flag} class="w-10 h-10" alt="flag" />
                <div class="card-body">
                    <h3 class="card-title">${country.name}</h3>
                    <p>Price: ${country.price}$</p>
                    <div class="card-actions justify-end">
                        ${(() => {
                            switch (true) {
                                case userBudget > country.price:
                                    return '<button class="btn btn-warning transition-all hover:scale-105 hover:text-white">Submit</button>';  
                                case priceDifference > 0:
                                    return `<span class="text-red-600">Difference: ${priceDifference}$</span>`;
                                case priceDifference === 0:
                                    return '<button class="btn btn-warning transition-all hover:scale-105 hover:text-white">Submit</button>';                                  
                                default:
                                    return '<button class="btn btn-warning transition-all hover:scale-105 hover:text-white">Submit</button>';
                            }
                        })()}
                    </div>
                </div>
            </div>
        `;
        return countryElement;
    };    

    const findMatchingCountries = (userBudget, countries) => {
        const sortedCountries = countries.sort((a, b) => Math.abs(userBudget - a.price) - Math.abs(userBudget - b.price));
        const closestCountry = sortedCountries[0];

        return [closestCountry];
    }
});

// Task 2
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            title: "item1",
            price: 20
        },
        {
            title: "item2",
            price: 50
        },
        {
            title: "item3",
            price: 100
        },
    ];

    const coupons = [
        {
            name: "NEWYEAR",
            value: 20,
        },
        {
            name: "BLACKFRIDAY",
            value: 30,
        },
        {
            name: "SUMMERSALE",
            value: 15,
        },
    ];

    const productsRow = document.querySelector(".products");
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceSpan = document.querySelector(".total-price");
    const couponInput = document.getElementById("couponInput");
    const applyCouponBtn = document.getElementById("applyCouponBtn");

    const cart = {};

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <div class="card w-full bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h3 class="card-title">${product.title}</h3>
                    <p>Price: ${product.price}$</p>
                    <div class="card-actions justify-end">
                        <button class="add btn btn-warning transition-all hover:scale-105 hover:text-white">Add to cart</button>
                    </div>
                </div>
            </div>
        `;
        productElement.querySelector(".add").addEventListener("click", () => addToCart(product));
        productsRow.appendChild(productElement);
    });

    const addToCart = (product) => {
        const productId = product.title;

        if (cart[productId]) {
            cart[productId].quantity += 1;
        } else {
            cart[productId] = {
                title: product.title,
                price: product.price,
                quantity: 1,
            };
        }

        updateCartDisplay();
    };

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        for (const productId in cart) {
            const { title, price, quantity } = cart[productId];
            const cartItemElement = document.createElement("div");
            cartItemElement.innerHTML = `<p>${title} x${quantity}</p>`;
            cartItemsContainer.appendChild(cartItemElement);

            totalPrice += price * quantity;
        }

        applyCouponBtn.addEventListener("click", applyCoupon);

        function applyCoupon() {
            const enteredCoupon = couponInput.value.toUpperCase();
            const validCoupon = coupons.find(coupon => coupon.name === enteredCoupon);

            if (validCoupon) {
                const discount = validCoupon.value / 100; // Convert percentage to decimal
                totalPrice *= (1 - discount);
                totalPriceSpan.textContent = `Total: $${totalPrice.toFixed(2)} (Discount applied: ${validCoupon.value}%)`;
            } else {
                alert("Invalid coupon. Please try again.");
            }
        }

        totalPriceSpan.textContent = `Total: $${totalPrice.toFixed(2)}`;
    };    
});
