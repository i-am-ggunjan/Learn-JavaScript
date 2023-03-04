// function outer() {
//     let a = 10;
//     console.log("I'm Outer");

//     function inner () {
//         console.log("I'm Inner");
//         console.log(a);
//     }
//     inner();
// }

// outer();

function outer() {
    let a = 10;
    // console.log("I'm Outer");
    // console.log(a);

    function inner () {
        console.log("I'm Inner");
        console.log(a);
        return "I'm Inner";
    }
    // inner();
    return inner;
}

let res = outer();
console.log("==========");
res();
console.log("==========");
console.log(res());
// console.log("==========");
// console.log(res());
// console.log("==========");
// res();