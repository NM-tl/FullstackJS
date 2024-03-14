document.addEventListener("DOMContentLoaded", () => {
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
        const average = sum / temperatures.length;
        return parseFloat(average.toFixed());
    };
    
    const getMaxTemperature = (weather) => {
        return Math.max(...Object.values(weather));
    };
    
    const getMinTemperature = (weather) => {
        return Math.min(...Object.values(weather));
    };
    
    const formatWeekDaysString = (weather) => {
        const days = Object.keys(weather);
        return `(${days.join(" - ")})`;
    };
    
    console.log(getAverageTemperature(weatherForecast));
    console.log(getMaxTemperature(weatherForecast));
    console.log(getMinTemperature(weatherForecast));
    console.log(formatWeekDaysString(weatherForecast));
    
});
