// //! Rest Operator

// //? Rest parameter should be placed at last because if we put it in starting then all value goes to this parameter and next parameter will not get value -- memory wastage.

// console.log("=======rest parameter=======");
// function greet (a,c, ...b) {
//     console.log(a,c,b);
//     // console.log(c);
//     // console.log(b);
//     // console.log(b[1]);
//     // console.log(b[0]);
//     // console.log(b[2]);
//     b.map (value => {
//         console.log(value);
//     })
// };

// greet(10,20,30,4,50);

// console.log("=======Sum=======");
// function sum (...s) {
//     let sum = s.reduce((acc, value) => {
//         acc = acc+value;
//         return acc;
//     },0);
//     // console.log(s);
//     console.log(sum);
// }
// sum(10,40,5,06,04,08,08,74,0,8,2,9);


// // We are doing Array De-Structuring.
// console.log("======De-Structuring=======");

// let arr = [10,20,30,50,40,60,80,60,40];

// let [a,b,c] = arr;
// console.log(a,b,c);
// // console.log(b);
// // console.log(c); 

// console.log("======De-Structuring using rest parameter=======");

// arr = [10,20,30,50,40,60,80,60,40];
// //? Suppose we have Array and we dont know how much value are their in Array. We need two value from starting and rest value we want in a container. We use rest operator.
// [a,b,...c] = arr;
// console.log(a,b,c);
// // console.log(b);
// // console.log(c);



// // In which condition, we are using -- makes difference between rest operator and spread operator //
// // If we pass the value then it accept the value ( and store in Array) and behave like rest operator.
// // If we dont pass the value,  then it unpack the value from Array and behave like spread operator.


// //! Spread Operator
// console.log("======Spread parameter=======");

// arr = [10,20,30,50];
// let arr1 = [...arr];
// // spread operator help in deep copying.
// arr[2]=90;
// arr1[2] = 80;
// console.log(arr);
// console.log(arr1);


// let obj = {
//     name: "Gaurav",
//     age: 21,
//     locate: {
//         city:"Noida",
//         street: {
//             street_no: 35,
//         }
//     } 
// }

// let obj1 = {...obj}
// // spread operator help in deep copying.
// obj.name = "Gunjan"
// console.log(obj);
// console.log(obj1);

// // shallow copy created for nested object
// obj.locate.street.street_no = 50;
// console.log(obj.locate.street.street_no);
// console.log(obj1.locate.street.street_no);


 

// // We want to pass the data of three object simultaneously to a function.
// let human1 = {
//     name1: "chombi",
//     age1: 18,
// }
// let human2 = {
//     name2: "chomba",
//     age2: 19,
// }
// let human3 = {
//     name3: "chombu",
//     age3: 20,
// }

// let new__human = {human1,human2,human3};
// // This will send object not data.
// console.log(new__human); 

// let new_human = {...human1,...human2, ...human3};
// // This will send data
// console.log(new_human);









// // var array1 = [10, 20, 30, 40, 50];
// // var array2 = [60, 70, 80, 90, 100];
// // var array3 = [...array1, ...array2];
// // console.log(array3);
// // Output:



// // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


let obj = {
    name: "Gaurav",
    age: 21,
    locate: {
        city:"Noida",
        street: {
            street_no: 35,
        }
    } 
}

let obj1 ={...obj}
// spread operator help in deep copying.
// obj.name = "Gunjan"
console.log(obj);
console.log(obj1);

// shallow copy created for nested object
obj.locate.street.street_no = 50;
console.log(obj.locate.street.street_no);
console.log(obj1.locate.street.street_no);