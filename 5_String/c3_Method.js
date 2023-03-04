// split("pattern") :- It is used to split the string on some pattern. It will return array of splited string.
// toString dont accept any pattern


// reverse()

// join("pattern") :- It is used to convert the array to string on some pattern. It wil return string that is concatinated on some pattern.

let arr = [10,20,50,4]
console.log(typeof(arr));
console.log(arr);
console.log(arr.reverse());
console.log(typeof(arr.reverse()));
console.log(arr.reverse().join(""));
console.log(typeof(arr.reverse().join("")));

let str1 = "My first learning";

console.log(str1);
console.log(typeof(str1));
console.log(typeof("String"));
console.log("=========================");
console.log(Array.from(str1));
console.log("=========================");

console.log(str1.split(""));
// console.log(str1.split(" "));
console.log("=========================");

console.log(Array.from(str1).reverse().join(''));
console.log("=================jnj========");

console.log(str1.split("").reverse().join(""));
console.log("================");

console.log(str1.split(" ").reverse().join(""));
console.log("================");

//  convert first letter of each string to upper case.
let str3 = "we are on war.";
console.log(str3);
console.log("================");
let res = str3.split(" ").map(value => {
    return value[0].toUpperCase() + value.slice(1);
})
console.log(res); 
console.log(res.join(" ")); 
// console.log(res.reverse().join(" "));
// split slice join
