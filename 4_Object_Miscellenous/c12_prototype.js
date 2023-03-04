// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


let obj1 = { 
    name: "chombi",
    dob : 1969,
    // __proto__ : Object 
}

let obj2 = {
    age: 21,
    __proto__ : obj1,

}

let obj3 = {
    address : "Noida",
    __proto__ : obj2,

}

// console.log(obj3.age);
// console.log(obj2.__proto__);
// console.log(obj3.__proto__);

// console.log(obj1.__proto__.__proto__);
// console.log(obj3.__proto__.__proto__);

let obj4 = {
    contact: "xxxxxxxx99",
    __proto__ : {...obj1,...obj2}
}

console.log(obj4);
console.log(obj4.contact);
console.log(obj4.name);
console.log(obj4.age);
