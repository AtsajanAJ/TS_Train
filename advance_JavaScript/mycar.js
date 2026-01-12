const person = {
    name: 'Jane',
    age: 19,
}

const car1 = {
    brand: "Toyota",
    license: "1234",
}

const car2 = {
    brand: "Honda",
    license: "5678",
}

car1.owner = person;
car2.owner = person;

car1.location = {
    latitude: 7.951933,
    longitude: 98.338089,
}

car2.location = {
    latitude: 8.195595,
    longitude: 98.297082,
}

console.log("Person:", person);
console.log("Car 1: ", car1)
console.log("Car 2: ", car2)
