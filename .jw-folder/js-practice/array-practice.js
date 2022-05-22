console.log("array-practice.js file is connected!");

var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log( cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});