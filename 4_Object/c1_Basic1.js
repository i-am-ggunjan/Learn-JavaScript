// Way to create object
let obj1 = {}
console.log(obj1);

let obj2 = {
    "name":"chombi",
    age:22,
    height:5.7,
    
}
console.log(obj2);


// Accesing member of object :--- To access object member, we have to use dot_operator or sqaure_bracket with double_quotes.
console.log(obj2.name);
console.log(obj2["name"]);
console.log(obj2['age']);
console.log(obj2);



// How to insert or Update member of object :--- With the help of object_referenece and dot_operator or object_referenece and sqaure_bracket with double_quotes, we can update the key-vakue pair. If it is not present, it will get inserted else value will be updated.
obj2.age=25;
obj2['name']= "Gaurav";
obj2.sex = "karna hai";


// Deleting member of object :--- To delete an object property, we have delete keyword.
// delete obj2.age;
// delete obj2["height"]
console.log(obj2);


console.log("===========");






let obj3 = new Object();
console.log(obj3);

let obj4 = new Object({
    name:"Gaurav",
    // age:22,
});
console.log(obj4);

