// Date: 29/12/22
// Call, Apply, and Bind are three incredibly important JavaScript methods that are available to all JavaScript functions.

//? We know, function in JavaScript is a special object that has all the properties of a normal object. Like normal objects, JavaScript functions have built-in methods - call, apply, bind.

// Call, Apply, and Bind help keep our code clean.



// When the first argument is null or undefined the this variable points to the global object but in strict mode, it would be undefined.

/// Also, they are extremely powerful tools in functional programming in JavaScript. They all have a relationship with the this variable in JavaScript and they can be applied in concepts such as function currying, function borrowing, and function binding. ///

//! Function borrowing
//? Method or function borrowing is a way for an object to use the method of another object without redefining that method.
//? Function borrowing keeps our code clean and DRY.
//? Function borrowing is used when you already have a method defined for an object (either directly or via the prototype chain)


//! Currying in JavaScript
//? Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.




//! call() and apply() Method
let obj3 = {
    name: "Gaurav",
    speak: function () {
        console.log(`I'm ${this.name}`);
    }
};
let obj4 = {
    name: "Gunjan",
};

obj3.speak();
obj3["speak"]();

console.log("===call===");
obj3.speak.call(obj4);
obj3["speak"].call(obj4);

console.log("===apply===");
obj3.speak.apply(obj4);
obj3["speak"].apply(obj4);




//? final call function example
//! call() and apply() Method
let obj1 = {
    f_name: "Gaurav",
    l_name: "Gunjan"
};
let obj2 = {
    f_name: "Rupam",
    l_name: "Kumar"
};

let detail = function (age) {
    // console.log(`I'm`+ " " + this.f_name+ " " + this.l_name + " | " +"My age is: "+ age);
    console.log(`I'm ${this.f_name} ${this.l_name}` + " | " + "My age is: " + age);
};

console.log("=====Call Method=====");
detail.call(obj1, 22);
detail.call(obj2, 21);


console.log("=====Apply Method=====");
detail.apply(obj1, [22]);
detail.apply(obj2, [21]);



console.log("======Example======");
let detailOfEmployee = function(name,age,address){
    console.log(name+" "+age+" "+address+" "+this.job_title);
}
let job = {
    job_title : "IAS"
}
detailOfEmployee.call(job,"Gaurav" ,18, "bihar");
detailOfEmployee.apply(job,["Gaurav" ,18, "bihar"]);




//! bind() Method
console.log("=====bind Method=====");
let obj5 = {
    name:"Gaurav",
    age: 21,
    gender: "Male",
};

let obj6 = {
    name:"Gunjan",
    age: 22,
    gender: "Male",
};

let display = function () {
    console.log(`Name is ${this.name}`);
    console.log("Age is :"  + this.age);
    // console.log(`Gender is ${this.gender}`);
    console.log(`Gender is :` + this.gender);
};

display.bind(obj5);
display.bind(obj6);
console.log("==============");

let res5 =display.bind(obj5);
res5();

console.log("==============");
let res6 =display.bind(obj6);
res6();
