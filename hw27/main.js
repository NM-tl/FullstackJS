document.addEventListener("DOMContentLoaded", () => {
    // Task 1
    {
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
            
        (function(...funcs) {
            funcs.forEach(func => console.log(func));
        })(
            getAverageTemperature(weatherForecast),
            getMaxTemperature(weatherForecast),
            getMinTemperature(weatherForecast),
            formatWeekDaysString(weatherForecast),
        );       

        if (weatherList && getMinTemp && getMaxTemp) {
            renderWeatherList(weatherForecast);
            getAlert(getMinTemp, getMinTemperature, weatherForecast);
            getAlert(getMaxTemp, getMaxTemperature, weatherForecast);
        }
    }
    // Task 2
    {
        function Book(title, author, year) {
            return {
                title: title,
                author: author,
                year: year,
                available: true,
                ratings: [],
                addRating: function(user, rating) {
                    if (this.available && rating >= 1 && rating <= 5) {
                        this.ratings.push({ user: user.id, rating: rating });
                    }
                },
                getAverageRating: function() {
                    if (this.ratings.length === 0) return 0;
                    const totalRating = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
                    return totalRating / this.ratings.length;
                }
            };
        }

        function Library() {
            return {
                books: [],
                addBook: function(book) {
                    this.books.push(book);
                },
                removeBook: function(book) {
                    const index = this.books.indexOf(book);
                    if (index !== -1) {
                        this.books.splice(index, 1);
                    }
                },
                findBooksByAuthor: function(author) {
                    return this.books.filter(book => book.author === author);
                },
                listAvailableBooks: function() {
                    return this.books.filter(book => book.available);
                },
                borrowBook: function(title) {
                    const book = this.books.find(book => book.title === title && book.available);
                    if (book) {
                        book.available = false;
                        return book;
                    } else {
                        return null;
                    }
                },
                returnBook: function(title) {
                    const book = this.books.find(book => book.title === title && !book.available);
                    if (book) {
                        book.available = true;
                    }
                }
            };
        }

        function User(name) {
            return {
                id: Math.floor(Math.random() * 1000),
                name: name,
                borrowBook: function(title, library) {
                    return library.borrowBook(title);
                },
                returnBook: function(title, library) {
                    library.returnBook(title);
                }
            };
        }

        // const library = Library();
        // const book = Book("Назва", "Автор", 2020);

        // library.addBook(book);
        // library.removeBook(book);

        // let user = User("Ім'я");
        // book.addRating(user, 5);

        // user.borrowBook("Назва", library);
        // user.returnBook("Назва", library);
        // book.addRating(user, 5);
    }
});
