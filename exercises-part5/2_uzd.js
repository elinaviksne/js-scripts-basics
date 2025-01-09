function printRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

printRange(5, 8);  

function getName() {
    return 'Elīna';
}

let name = getName();

console.log(name); 

function addNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addNumbers(5, 8);
console.log(sum); 

function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let max1 = getMax(5, 8);
let max2 = getMax(12, 9);

console.log(max1);  
console.log(max2);  
