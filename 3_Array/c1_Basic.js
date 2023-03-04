
let arr = [10,60,5,40,30,60,8];
// for(value of arr){
//     console.log(value);
// }


// console.log("=====map =====");

// let a = arr.map(value => {
//     console.log(value);
//     return value;
// })
// console.log("====");
// console.log(a);

console.log("=====for each =====");
let b = arr.forEach((value ,index, array)=> {
    // console.log(value);
    console.log(value);
    return index;
})
console.log("====");
console.log(b);

// function value(arr) {
    // for(value of arr){
    //     console.log(value);
    // }
    // arr.forEach(value => {
    //     console.log(value);
    //     return "hello";
    // });
//     let res = arr.map(value => {
//         console.log(value);
//         return "hello";
//     });
//     return res;
// }

// value([10,50,60])
// console.log("==========");
// console.log(value([10,50,60]));
// console.log("==========");
// // console.log(res);

// console.log("===========================");
// let a = [10,50,9,50]
// let b = a.forEach(value =>{
//     console.log(value);
//         return value;
// })
// console.log(b);