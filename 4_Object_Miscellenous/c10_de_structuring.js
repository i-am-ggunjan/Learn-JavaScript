// process of unpacking of values from object or array.

// Object de-structuring
let obj = {
    name: "Gaurav",
    age: 21,
    locate: {
        state:"Noida",
        street: {
            street_no: 35,
        }
    } 
}
// de-structuring
let { age,name,name1, locate} = obj;

console.log(name);
console.log(name1);
console.log(age);
console.log(locate);
console.log(name,age,locate,name1);
console.log("================");


// Array de-structuring
let arr = [10,60,[50,40,80],40,30,40];

// de-structuring
let [a,b,c,d,e,f,g,h] = arr;

console.log(a,b,d,c,e,h);
console.log(e);
// console.log(c);
