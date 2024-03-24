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
});
