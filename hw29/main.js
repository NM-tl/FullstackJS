document.addEventListener("DOMContentLoaded", () => {
    // Task 1
    {
        const Vehicle = {
            start() {
                console.log("Vehicle is starting...");
            },
            stop() {
                console.log("Vehicle is stopping...");
            }
        };

        const Car = {
            __proto__: Vehicle,
            drive() {
                console.log("Car is driving...");
            },
            park() {
                console.log("Car is parking...");
            }
        };

        const Bike = {
            __proto__: Vehicle,
            ride() {
                console.log("Bike is riding...");
            },
            lock() {
                console.log("Bike is locking...");
            }
        };

        const Truck = {
            __proto__: Car,
            loadCargo() {
                console.log("Truck is loading cargo...");
            }
        };

        const Sedan = {
            __proto__: Car,
            openTrunk() {
                console.log("Sedan is opening trunk...");
            }
        };

        const SportBike = {
            __proto__: Bike,
            race() {
                console.log("SportBike is racing...");
            }
        };

        const Scooter = {
            __proto__: Bike,
            deliverFood() {
                console.log("Scooter is delivering food...");
            }
        };

        // tests
        console.log("Task 1:")
        Car.start(); // Vehicle is starting...
        Car.drive(); // Car is driving...
        Truck.start(); // Vehicle is starting...
        Truck.loadCargo(); // Truck is loading cargo...
        Scooter.stop(); // Vehicle is stopping...
        Scooter.deliverFood(); // Scooter is delivering food...

    }
    // Task 2
    {
        const Vehicle = {
            start() {
                console.log("Vehicle is starting...");
            },
            stop() {
                console.log("Vehicle is stopping...");
            }
        };

        const Car = {};
        Object.setPrototypeOf(Car, Vehicle);
        Car.drive = function() {
            console.log("Car is driving...");
        };
        Car.park = function() {
            console.log("Car is parking...");
        };

        const Bike = {};
        Object.setPrototypeOf(Bike, Vehicle);
        Bike.ride = function() {
            console.log("Bike is riding...");
        };
        Bike.lock = function() {
            console.log("Bike is locking...");
        };

        const Truck = {};
        Object.setPrototypeOf(Truck, Car);
        Truck.loadCargo = function() {
            console.log("Truck is loading cargo...");
        };

        const Sedan = {};
        Object.setPrototypeOf(Sedan, Car);
        Sedan.openTrunk = function() {
            console.log("Sedan is opening trunk...");
        };

        const SportBike = {};
        Object.setPrototypeOf(SportBike, Bike);
        SportBike.race = function() {
            console.log("SportBike is racing...");
        };

        const Scooter = {};
        Object.setPrototypeOf(Scooter, Bike);
        Scooter.deliverFood = function() {
            console.log("Scooter is delivering food...");
        };

        // tests
        console.log("Task 2:")
        Car.start(); // Vehicle is starting...
        Car.drive(); // Car is driving...
        Truck.start(); // Vehicle is starting...
        Truck.loadCargo(); // Truck is loading cargo...
    }
    // Task 3
    {
        function Vehicle() {}
        Vehicle.prototype.start = function() {
            console.log("Vehicle is starting...");
        };
        Vehicle.prototype.stop = function() {
            console.log("Vehicle is stopping...");
        };

        function Car() {}
        Car.prototype = Object.create(Vehicle.prototype);
        Car.prototype.constructor = Car;
        Car.prototype.drive = function() {
            console.log("Car is driving...");
        };
        Car.prototype.park = function() {
            console.log("Car is parking...");
        };

        function Bike() {}
        Bike.prototype = Object.create(Vehicle.prototype);
        Bike.prototype.constructor = Bike;
        Bike.prototype.ride = function() {
            console.log("Bike is riding...");
        };
        Bike.prototype.lock = function() {
            console.log("Bike is locking...");
        };

        function Truck() {}
        Truck.prototype = Object.create(Car.prototype);
        Truck.prototype.constructor = Truck;
        Truck.prototype.loadCargo = function() {
            console.log("Truck is loading cargo...");
        };

        function Sedan() {}
        Sedan.prototype = Object.create(Car.prototype);
        Sedan.prototype.constructor = Sedan;
        Sedan.prototype.openTrunk = function() {
            console.log("Sedan is opening trunk...");
        };

        function SportBike() {}
        SportBike.prototype = Object.create(Bike.prototype);
        SportBike.prototype.constructor = SportBike;
        SportBike.prototype.race = function() {
            console.log("SportBike is racing...");
        };

        function Scooter() {}
        Scooter.prototype = Object.create(Bike.prototype);
        Scooter.prototype.constructor = Scooter;
        Scooter.prototype.deliverFood = function() {
            console.log("Scooter is delivering food...");
        };

        // tests
        console.log("Task 3:");
        const car = new Car();
        car.start(); // Vehicle is starting...
        car.drive(); // Car is driving...

        const truck = new Truck();
        truck.start(); // Vehicle is starting...
        truck.loadCargo(); // Truck is loading cargo...

        Vehicle.prototype.start = function() {
            console.log("Vehicle drive");
        };
        Vehicle.prototype.stop = function() {
            console.log("Vehicle broken");
        };

        const sedan = new Sedan();
        sedan.start(); // Vehicle drive
        sedan.stop(); // Vehicle broken
    }
    // Task 4
    {
        // User
        function User(username, email) {
            this.username = username;
            this.email = email;
            this.loggedIn = false;
        }

        User.prototype.login = function() {
            !this.loggedIn ? 
            (System.addUser(this), console.log(`User ${this.username} logged in.`), this.loggedIn = true) : 
            console.log(`User ${this.username} is already logged in.`);
        };

        User.prototype.logout = function() {
            this.loggedIn ? 
            (System.removeUser(this), console.log(`User ${this.username} logged out.`), this.loggedIn = false) : 
            console.log(`User ${this.username} is not logged in.`);
        };

        // Admin
        function Admin(username, email) {
            User.call(this, username, email);
        }

        Admin.prototype = Object.create(User.prototype);
        Admin.prototype.constructor = Admin;

        Admin.prototype.removeUser = function(username) {
            const user = System.getUserByUsername(username);
            if (this.loggedIn && user) {
                System.removeUser(username);
                user.loggedIn = false;
                console.log(`User ${username} removed by admin.`);
            } else if (this.loggedIn && !user) {
                console.log(`User ${username} does not exist.`);
            } else {
                console.log("Admin is not logged in.");
            }
        };        

        // System
        const System = {
            users: {},
            addUser(user) {
                this.users[user.username] = user;
            },
            removeUser(user) {
                delete this.users[user.username];
            },
            removeUserById(id) {
                delete this.users[id];
            },
            getOnlineUsers() {
                return console.log(Object.keys(this.users).filter(username => this.users[username].loggedIn));
            },            
            getUser(id) {
                return this.users[id];
            },
            getUserByUsername(username) {
                return this.users[username];
            }
        };        

        // tests
        const user1 = new User("user1", "user1@gmail.com");
        const user2 = new User("user2", "user2@gmail.com");
        const admin = new Admin("admin", "admin@gmail.com");

        console.log("Task 4:")
        admin.login();
        user1.login();
        user2.login();
        System.getOnlineUsers();
        user1.logout();
        admin.removeUser(user2.username);
        System.getOnlineUsers();
        user2.login();
    }
});
