// function greet(){
//     console.log("Hello, Everyone");
//     return "hii";
// }
// greet(); 
// It will generate function call and function code will execute.
// greet :-  It store the reference of function object.

// console.log(greet());
// After executing the function it will also print the return value, if function doesnot have any return value then it will print undefined (JS Engine implicitly return undefined).

// Inside print statement we call a function that have return keyword at last. Here js engine implicitly return the value that's why we are able to use this greet() function inside printing statement.

// console.log(greet);
//  It will print function code available inside the function object.


// function square(n) {
//     console.log("square function");
//     console.log(n*n);
// }
// square();
// square(5);
// If we call a function without writing it in print statement. It will not return anything even when we passing argument.

//If we want to print the return value we should write function call inside print statement.

// console.log(square());
// it will return NaN because this required a argument on calling.
// console.log(square(5));
// it will return 25.
// console.log(square);

// console.log("============");

// function square1(n) {
//     console.log("square1 function");
//     console.log(n*n);
//     return n * n;
// }
// square1();
// square1(5);
// console.log(square1());
// console.log(square1(5));

