let car = {
    mark: 'Toyota',  
    model: 'Corolla',  
    year: 2010  
};

console.log(car.make);  
console.log(car['model']);  

let currentYear = new Date().getFullYear();

if (currentYear - car.year > 10) {
    console.log("Šī automašīna ir vecāka par 10 gadiem.");
} else {
    console.log("Šī automašīna nav vecāka par 10 gadiem.");
}


if (car.make === 'Toyota') {
    console.log("Šī ir Toyota automašīna");
}

car.owner = 'nezināms';

console.log(car);
