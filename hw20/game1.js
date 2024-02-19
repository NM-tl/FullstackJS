document.addEventListener("DOMContentLoaded", () => {
    alert("Хай✌🏻, сыграем в игру угадай число? Тебе нужно просто угадать число что я загадаю.");
    const decision = confirm("Начнем?🙌🏻");
    
    !decision ? 
        alert("Тогда в другой раз👋🏻") : 
        (() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            let value = prompt("Какое число я загадал?🧠");
            while (isNaN(value) || value === "") {
                alert("Пожалуйста, введите число.👀");
                value = prompt("Какое число я загадал?🧠");
            }

            if(!value) {
                alert("Тогда в другой раз👋🏻");
            } else {
                randomNumber === parseInt(value) ? 
                alert("Поздравляю, ты угадал!👏🏻") : 
                alert(`Неудача, моё число = ${randomNumber}. Повезёт в следующий раз.🤝🏻`);
            }          
        })();
});