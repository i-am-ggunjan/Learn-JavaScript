// Date: 28/12/22
// 'this' keyword

// Function Declaration :-- 
// In this function, we have 'this' keyword.
// 'this' keyword, available inside function, created by using declaration statement, will store the reference of outer scope.
// If function is available inside object, 'this' will store reference of object.

let obj1 = {
    name:"Gaurav",
    age:22,
    speak: function () {
        return `Good Morning, i'm ${this.name} and my age is ${this.age}`;
    }
};

console.log(obj1.name);
console.log(obj1.speak());


// Arrow fucntion :--
// It does not have 'this' keyword.

// let obj2 = {
//     name:"Gaurav",
//     speak: () => {
//         console.log(`hello, i'm ${this.name}`);
//     }
// };

// console.log(obj2.name);
// obj2.speak();

