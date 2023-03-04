// Traditional anonymous function
// let f1 = function (a, b) {
//    return a + b + 100;
// };

// f1(5,5);
// console.log(f1(5,5));

// Arrow function
let f2 = (a, b) => a + b + 100;
// Internally let f2 = (a, b) => {return a + b + 100;}

f2(5,5);
console.log(f2(5,5));

let f3 = (a, b) => {a + b + 100}

f3(5,5);
console.log(f3(5,5));


// let f3 =a => {
//   console.log("hello");
//   return "hiii"
// }
// console.log(f3());

// f3()



// const a = 4;
// const b = 2;

// // Traditional anonymous function (no parameters)
// let f3 = function() {
//   return a + b + 100;
// };
// console.log(f3());


// // Arrow function (no arguments)
// let f4 = () => a + b + 100;
// console.log(f4());
