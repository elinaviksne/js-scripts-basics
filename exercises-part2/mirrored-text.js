let inputString = "sveiki";

function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    return strRev;
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));