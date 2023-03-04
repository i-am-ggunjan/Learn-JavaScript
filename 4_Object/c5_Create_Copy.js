// Date: 29/12/22
// How to create copy?

// Shallow Copy -->
//  In shallow copy, copied object is connected with original object, because we store same reference in both variable.
//  Here, same memory block will be targeted by both two object.
//  If we make any change, it will be reflected in origibnal object also.

let obj1 = {
    name:"Gaurav",
    age:21,
}

obj2 = obj1;
// this will create problem --> Shallow Copy
// obj2.age=25
// console.log(obj1);
// console.log(obj2);



// Deep Copy -->
// In deep copy, copied object is not connected with original object, because here we create seperate object and then we copy key-value pair of original object.
// If we make any change in copied object, it is not reflected to original object.

let obj3 = {
    name:"Gaurav",
    age:21,
    height:5.7,
}

let obj4 ={
    // Empty object created
}

for(prop in obj3){
    obj4[prop] = obj3[prop];
    // here we not use double quotes inside sq. bracket becasue on iterating it will automatically get string key becasue key is always in string.

    // if we access particular key by their name then we have to use double quotes in sq. bracket.
}


obj4.age=25;
console.log(obj3);
console.log(obj4);


