document.addEventListener("DOMContentLoaded", () => {
    const weatherList = document.getElementById("weatherList");
    const getMinTemp = document.getElementById("getMin");
    const getMaxTemp = document.getElementById("getMax");

    const weatherForecast = {
        Monday: 25,
        Tuesday: 26,
        Wednesday: 24,
        Thursday: 20,
        Friday: 18,
        Saturday: 18,
        Sunday: 15,
    };

    const getAverageTemperature = (weather) => {
        const temperatures = Object.values(weather);
        const sum = temperatures.reduce((acc, cur) => acc + cur, 0);
        return parseFloat((sum / temperatures.length).toFixed());
    };
    
    const getMaxTemperature = (weather) => Math.max(...Object.values(weather));
    
    const getMinTemperature = (weather) => Math.min(...Object.values(weather));

    const getAlert = (btn, func, weather) => {
        btn.addEventListener("click", () => { alert(func(weather)) });
    }
    
    const getShortWeekday = (day) => day.slice(0, 3);
    
    const formatWeekDaysString = (weather) => {
        const shortDays = Object.keys(weather).map(getShortWeekday);
        return `(${shortDays.join(" - ")})`;
    };    

    const renderWeatherList = (obj) => {   
        const keys = Object.keys(obj);
        const lastKeyIndex = keys.length - 1;
    
        for (const [index, [day, temperature]] of Object.entries(obj).entries()) {
            const listItem = document.createElement("li");
            listItem.classList.add("flex", "flex-col", "gap-2", "text-center", "font-semibold", "p-5");
            if (index !== lastKeyIndex) {
                listItem.classList.add("border-r", "border-black");
            }
            listItem.innerHTML = `
                <span>${getShortWeekday(day)}</span>
                <span class="text-2xl">${temperature}°C</span>
            `;
            weatherList.appendChild(listItem);
        }
    };
        
    console.log(getAverageTemperature(weatherForecast));
    console.log(getMaxTemperature(weatherForecast));
    console.log(getMinTemperature(weatherForecast));
    console.log(formatWeekDaysString(weatherForecast));

    if (weatherList && getMinTemp && getMaxTemp) {
        renderWeatherList(weatherForecast);
        getAlert(getMinTemp, getMinTemperature, weatherForecast);
        getAlert(getMaxTemp, getMaxTemperature, weatherForecast);
    }    
});
