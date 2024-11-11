let num1 = 10;
let num2 = 7;

function findMax(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

console.log(findMax(num1, num2)); // Izvade: 7
console.log(num1); // Izvade: 10