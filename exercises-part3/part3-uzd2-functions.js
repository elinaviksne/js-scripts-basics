function printName (){
    console.log("Elīna");
}
printName();

console.log("------------" + "\n");

function printNameVer2 (name){
    console.log(name);
}
let firstName = "Elīna";
printNameVer2(firstName);

console.log("------------" + "\n");

function numbers(){
    for(let i = 1; i < 11; i++){
        console.log(i);
    }
}
numbers();

console.log("------------" + "\n");

function specificNumPrint(num1, num2){
    for(num1; num1 < num2+1; num1++){
        console.log(num1);
    }
}
let num1 = 5;
let num2 = 8;
specificNumPrint(num1, num2); 