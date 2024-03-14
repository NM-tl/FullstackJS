document.addEventListener("DOMContentLoaded", () => {
    const resTasks = [
        document.getElementById("res1"),
        document.getElementById("res2"),
        document.getElementById("res3"),
        document.getElementById("res4"),
        document.getElementById("res5"),
        document.getElementById("res6"),
        document.getElementById("res7"),
    ];

    // Task 1
    {
        const books = [
            { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
            { title: '1984', author: 'Джордж Орвелл' },
            { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
          ];  
        const authorToFind = 'Джордж Орвелл';
        const firstBookByAuthor = books.find(book => book.author === authorToFind);
        
        resTasks[0].innerText = firstBookByAuthor
        ? `Перша книга автора ${authorToFind}: ${firstBookByAuthor.title}`
        : `Книга автора ${authorToFind} не знайдена.`;   
    }    
    // Task 2
    {
        const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const evenNumbers = numbs.filter(number => number % 2 === 0);
        
        resTasks[1].innerText = evenNumbers;
    }
    // Task 3
    {
        const prices = [100, 200, 300, 400, 500];
        const increasedPrices = prices.map(price => price + price * 0.1);
        
        resTasks[2].innerText = increasedPrices;
    }
    // Task 4
    {
        const numbers = [45, 80, 32, 100, 105];
        const hasNumberGreaterThan100 = numbers.some(number => number > 100);
        
        resTasks[3].innerText = hasNumberGreaterThan100
            ? "У масиві є хоча одне число більше 100."
            : "У масиві немає чисел більше 100.";
    }
    // Task 5
    {
        const nums = [1, 2, 3, 4, 5, -6, 7];
        const areAllPositive = nums.every(number => number > 0);

        resTasks[4].innerText =areAllPositive
            ? "Усі числа в масиві є додатні."
            : "Є хоча одне від'ємне число в масиві.";
    }
    // Task 6
    {
        const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];
        const firstWords = sentences.map(sentence => sentence.split(' ')[0]);

        resTasks[5].innerText = firstWords;
    }
    //Task 7
    {
        const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];
        const totalWords = sentences.reduce((count, sentence) => {
            return count + sentence.split(' ').length;
        }, 0);
          
        resTasks[6].innerText = 'Загальна кількість слів у масиві речень:' + totalWords;
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const drinkPicker = document.getElementById("pickedDrink");
    const addDrink = document.getElementById("addDrink");
    const dishPicker = document.getElementById("pickedDish");
    const addDish = document.getElementById("addDish");
    const tablePicker = document.getElementById("tableNumber");
    const submit = document.getElementById("submitOrder");

    /* menu */
    const menu = {
        dish: {
            "Cheesecake": 50,
            "Tiramisu": 60,
        },
        drink: {
            "Coffee": 30,
            "Latte": 40,
        },
    };
    
    const renderOptions = (select, obj) => {
        select.appendChild(new Option("Pick", ""));
    
        Object.entries(obj).forEach(([key, value]) => {
            const option = new Option(`${key} - ${value} $`, `${key} - ${value} $`);
            select.appendChild(option);
        });
    };
    
    renderOptions(dishPicker, menu.dish);
    renderOptions(drinkPicker, menu.drink);
    
    const status = ["new", "cook", "done"];
    const statusSelect = document.querySelectorAll(".status");
    
    const renderStatus = (selects, arr) => {
        selects?.forEach(select => {
            arr.forEach(status => {
                const option = new Option(status, status);
                select.appendChild(option);
            });
        });
    };
    
    renderStatus(statusSelect, status);
    
    const orderPreview = document.getElementById("orderPreview");
    const totalDisplay = document.getElementById("orderPreviewTotal");
    
    const updateOrderPreview = (trigger, value) => {
        if (!trigger || !value || value === "Pick") {
            return;
        }
    
        trigger.addEventListener("click", () => {
            const [name, price] = value.split(' -');
            const newItem = document.createElement("div");
            newItem.classList.add("flex", "items-center", "gap-2", "orderItem");
            newItem.innerHTML = `<span>${name}</span><span>|</span><span>${price}</span>`;
            orderPreview.appendChild(newItem);
    
            const total = Array.from(orderPreview.querySelectorAll('.flex.items-center span:nth-child(3)'))
                .reduce((sum, item) => sum + parseFloat(item.textContent.replace('$', '')), 0);
    
            totalDisplay.textContent = `Total: ${total.toFixed(2)}$`;
        });
    };
    
    drinkPicker.addEventListener("change", () => updateOrderPreview(addDrink, drinkPicker.value));
    dishPicker.addEventListener("change", () => updateOrderPreview(addDish, dishPicker.value));
    
    tablePicker.addEventListener("input", () => {
        tableNumber = tablePicker.value;
    });
    
    submit.addEventListener("click", () => {
        createOrder();
        renderOrdersToTable();
    });
    
    const createOrder = () => {
        if (!tableNumber || isNaN(tableNumber) || tableNumber <= 0) {
            alert("Table number is invalid.");
            return;
        }
    
        const selectedDish = dishPicker.value;
        const selectedDrink = drinkPicker.value;
    
        if (!selectedDish && !selectedDrink) {
            alert("Please select a dish or a drink.");
            return;
        }
    
        const orderItems = Array.from(orderPreview.getElementsByClassName("orderItem"));
    
        if (orderItems.length === 0) {
            alert("No items in the order.");
            return;
        }
    
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        let orderNumber = localStorage.getItem("lastOrderNumber") || 0;
    
        orderNumber++;
    
        const order = {
            number: orderNumber,
            table: tableNumber,
            dishes: orderItems.map(item => {
                const [name, price] = item.textContent.split('|').map(value => value.trim());
                return { name, price: parseFloat(price.replace('$', '')) };
            }),
            status: "new",
        };
    
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("lastOrderNumber", orderNumber);
    
        orderPreview.innerHTML = "";
        totalDisplay.textContent = "";
        tableNumber = null;
        tablePicker.value = "";
    };

    const getOrders = () => {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        return orders;
    };

    const renderStatusOptions = (select) => {
        status.forEach((statusOption) => {
            const option = new Option(statusOption, statusOption);
            select.appendChild(option);
        });
    };
    
    const renderOrdersToTable = () => {
        const renderOrdersToUsersTable = () => {
            const orders = getOrders();
            const usersTable = document.getElementById("usersTable");
        
            if (orders.length === 0) {
                usersTable.innerHTML = "No orders 😒";
            } else {
                usersTable.innerHTML = "";
                orders.forEach((order, index) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <th>${order.number}</th>
                        <th>${order.table}</th>
                        <td>
                            <div class="badge badge-info gap-2">
                                ${order.status}
                            </div>
                        </td>
                    `;
                    usersTable.appendChild(row);
                });
            }
        };
        const renderOrdersToAdminTable = () => {
            const orders = getOrders();
            const adminTable = document.getElementById("adminTable");
        
            if (orders.length === 0) {
                adminTable.innerHTML = "No orders 😒";
            } else {
                adminTable.innerHTML = "";
                orders.forEach((order, index) => {
                    const row = document.createElement("tr");
                    const dishes = order.dishes.map(dish => dish.name).join(" | ");
                    const totalPrice = order.dishes.reduce((sum, dish) => sum + dish.price, 0);
                    
                    row.innerHTML = `
                        <th>${index + 1}</th>
                        <th>${order.table}</th>
                        <th>${dishes}</th>
                        <th>${totalPrice}$</th>
                        <th>
                            <select class="select select-info status" data-order-id="${order.number}"></select>
                        </th>
                        <th>del</th>
                    `;
                    adminTable.appendChild(row);

                    const statusSelect = row.querySelector(".status");
                    renderStatusOptions(statusSelect);
                    statusSelect.value = order.status;
                });
            }
        };
        renderOrdersToUsersTable();
        renderOrdersToAdminTable();
    };

    const statusSelects = document.querySelectorAll(".status");

    statusSelects.forEach(select => {
        select.addEventListener("change", () => {
            const selectedStatus = select.value;
            const orderId = parseInt(select.dataset.orderId, 10);

            const orders = getOrders();
            const updatedOrders = orders.map(order => {
                if (order.number === orderId) {
                    return { ...order, status: selectedStatus };
                } else {
                    return order;
                }
            });

            localStorage.setItem("orders", JSON.stringify(updatedOrders));
            renderOrdersToTable();
        });
    });

    const countOrders = () => {
        const counter = document.getElementById("ordersCounter");
        counter.textContent = `Orders: ${JSON.parse(ordersData).length}`;
    };

    /* getOrders */
    const ordersData = localStorage.getItem("orders");
    if (ordersData) {
        renderOrdersToTable();
        countOrders();
    };
});
