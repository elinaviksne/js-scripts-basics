for (let i = 11; i < 21; i++){
    console.log(i + "\n");
}

console.log("------------" + "\n");

for (let i = 20; i > 10; i--){
    console.log(i + "\n");
}

console.log("------------" + "\n");

const array = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5"];
console.log(array[0] + " " + array[2]);

let arr_size = array.length;
console.log(arr_size);

let num = 0;
for (let i = 0; i < arr_size; i++){
    num++
    console.log(num + ". " + array[i]);
}
