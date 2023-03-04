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


// Object.keys(obj1);
console.log(Object.keys(obj1));

console.log(Object.values(obj1));

console.log(Object.entries(obj1));

// Object.assign(target-{},obj1);
let new_obj = Object.assign({},obj1);
console.log(new_obj);

new_obj.location.street.street_no = 50;
console.log(new_obj.location.street.street_no);
console.log(obj1.location.street.street_no);
new_obj.name = "abc";

console.log(new_obj["name"]);
console.log(obj1["name"]);


