function calculator(task,a,b){
    return task(a,b);
}

let sum = (a,b) => a+b;
let sub = (a,b) => a-b;
let mul = (a,b) => a*b;
let div = (a,b) => a/b;

console.log(calculator(sub,4,5));





// Normal Function program
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }function mul(a,b){
//     return a*b;
// }function div(a,b){
//     return a/b;
// }4

// console.log(sum(10,20));