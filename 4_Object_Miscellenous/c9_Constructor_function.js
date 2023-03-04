// Function used to create object.

function Human1 () {
    this.name = "chombi";
    this.age = 22;
    // return {{name: 'chombi', age: 22}} -- implicitly by JS Engine
}

let h1 = new Human1();
console.log(h1);

function Human2 (name, age) {
    this.name = name;
    this.age = age;
}

let h2 = new Human2("Gaurav",21) 
console.log(h2);


function Human3  (name, age) {
    this.name = name;
    this.age = age;

    this.detail = function () {
        // console.log(`Name: ${this.name} | Age: ${this.age}`);
        console.log("Name is : "+this.name +"|"+ "Age is : "+this.age);
    }
}

let h3 = new Human3("Gunjan", 21);
h3.detail();
// console.log(h3);