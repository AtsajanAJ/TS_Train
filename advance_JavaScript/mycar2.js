const person = {
    name: 'Jane',
    age: 19,
}

const car1 = {
    brand: "Toyota",
    license: "1234",
    owner: person,
    location: {
        latitude: 7.951933,
        longitude: 98.338089,
    }
}

const car2 = {
    brand: "Honda",
    license: "5678",
    owner: person,
    location: {
        latitude: 8.195595,
        longitude: 98.297082,
    }
};

// create an array of cars
const myCars = [car1, car2];
// console.log("Car Licenses:");
myCars.forEach(car => {
    console.log(car.license)
})
