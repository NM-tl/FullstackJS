document.addEventListener("DOMContentLoaded", () => {
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    
    let userInput;
    
    while (true) {
        userInput = prompt("Введіть кількість хвилин:");
        if (userInput !== null && userInput.trim() !== "" && !isNaN(userInput) && userInput >= 0 && userInput <= 5999) {
            break;
        } else if (userInput === null) {
            break;
        } else {
            alert("Будь ласка, введіть адекватне числове значення (від 0 до 5999 хвилин).");
        }
    }

    function convertMinutesToTime(minutes) {
        if (isNaN(minutes) || minutes < 0 || minutes > 5999) {
            alert("Будь ласка, введіть адекватне числове значення (від 0 до 5999 хвилин).");
            return;
        }
    
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        hoursSpan.style.setProperty('--value', hours);
        minutesSpan.style.setProperty('--value', remainingMinutes);
        arrivalNotification(hours, remainingMinutes);
    }

    convertMinutesToTime(parseInt(userInput));

    function arrivalNotification(currentHours, currentMinutes) {
        if (currentHours === 20 && currentMinutes === 31) {
            alert("20:31 Прибув Годжо Сатору");
        }
    }
});