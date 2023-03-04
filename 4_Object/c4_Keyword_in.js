// Date: 29/12/22
// 'in' keyword

// How to check some variable is present in object or not?

// 'in' keyword -->
// It will check, property is available in object or not.
// If available, return true else reutrn false.

        // syntax :-  "propery_name" in object_reference


let object = {
    name: "Gaurav",
    age: 21,
}

console.log(object);
console.log("age" in object);
console.log("hello" in object);