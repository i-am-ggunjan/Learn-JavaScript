let square = function (n){
    console.log("hello");
    return n*n;
    // if return statement is not present here, then in this case JS Engine implicitly return undefined.
}
square();
// o/p - hello
console.log(square()); // it will return something because it is written inside print statement. 
// o/p - hello
// o/p - NaN
square(5); // it will not return anything because only print statement will return the value.
// o/p - hello 
console.log(square(5));
// o/p - hello
// o/p - 25
// console.log(square);
// print whole function

console.log("===========================");

let square2 = function (n){
    console.log("hello");
}
square2();
// o/p - hello
console.log(square2());
// o/p - hello
// o/p - undefined
square2(5);
// o/p - hello
console.log(square2(5));
// o/p - hello
// o/p - undefined