// Date: 28/12/22

// Access property name as variable


// How to access property name as variable?
// To accept property name as variable, we have to wrap property name in sqaure bracket.
        //  syntax:- [variable_name]



let name = "Gaurav";
let age = 21;
let height = 6.7;


let obj1 = {
    name,
    // name:name,
    age,
    // age:age,
    height,
    // height:height
}
// console.log(obj1.name);
// console.log(obj1.height);

// console.log(obj1["name"]);
// console.log(obj1["age"]);



let promp = prompt("Enter your hobby")

let obj2 = {
    age : age,
    // promp,
    [promp]:656456 ,// this accept property name as variable

}
console.log(obj2);


// console.log(obj2.promp);
console.log(obj2["age"]);
console.log(obj2[promp]);
// console.log(obj2["promp"]);
