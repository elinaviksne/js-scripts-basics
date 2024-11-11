const person = {
    firstName: "Elīna",
    age: 18,
    isStudent: true
}

console.log(person.firstName);
console.log(person['firstName']);

if (person.age >= 18) {
    console.log("Tu esi pilngadīgs/a!");
} else {
    console.log("Tu neesi pilngadīgs/a!");
}

if (person.isStudent == true){
    console.log("Tu esi students!");
} else {
    console.log("Tu neesi students!");
}

person.course = "PT2024";