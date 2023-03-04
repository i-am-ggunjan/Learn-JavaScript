let obj1 = {
    name: "Gaurav",
    age: 21,
    location: {
        state:"Noida",
        street: {
            street_no: 35,
        }
    } 
}

console.log(obj1);
console.log(obj1["name"]);
console.log(obj1.location.street.street_no);


let obj2 = {};
for (prop in obj1){
    obj2[prop] = obj1[prop]
}


console.log(obj2);
obj2.name = "abc"
console.log(obj2["name"]);
console.log(obj1["name"]);

obj2.location.street.street_no = 50;
console.log(obj2.location.street.street_no);
console.log(obj1.location.street.street_no); // due to nested object, key hold the reference of nested object  so, deep copy of reference is created for that particular key. 

//When we try to create of copy of nested object then a deep copy of top-level data and a shallow copy of the nested data is created. To overcome this, JSON come in picture.


// JSON come in picture to remove this drawback.
console.log("=========JSON=========");
let obj3 = {
    name: "Gaurav",
    age: 21,
    location: {
        state:"Noida",
        street: {
            street_no: 35,
        }
    } 
}
let obj4 = {}
// To convert object in JSON -- We have JSON.stringify(Object_reference) method

let json_obj = JSON.stringify(obj3);

// After converting to JSON, now we have convert it back in object form to store in our new object_reference for manipulation by using JSON.parse(Object_reference) method

obj4 = JSON.parse(json_obj)


console.log(obj3);
obj4.location.street.street_no = 40;
console.log(obj4.location.street.street_no);
console.log(obj3.location.street.street_no);

//  Shortcut for applying parse and stringify method
let new_obj = JSON.parse(JSON.stringify(obj3));




