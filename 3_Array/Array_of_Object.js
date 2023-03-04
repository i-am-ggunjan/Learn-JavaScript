let user = [
    {
        name: "A",
        age: 18,
        marital_status : "married",
        gender: "M"
    },

    {
        name: "B",
        age: 17,
        marital_status : "unmarried",
        gender: "M"
    },

    {
        name: "C",
        age: 20,
        marital_status : "married",
        gender: "F"
    },

    {
        name: "D",
        age: 38,
        marital_status : "unmarried",
        gender: "M"
    },

    {
        name: "E",
        age: 21,
        marital_status : "married",
        gender: "F"
    },

    {
        name: "F",
        age: 18,
        marital_status : "married",
        gender: "M"
    },

    {
        name: "G",
        age: 34,
        marital_status : "unmarried",
        gender: "M"
    },

    {
        name: "H",
        age: 17,
        marital_status : "married",
        gender: "M"
    }


]
console.log("=========user===========");
console.log(user);


//! 1. Create duplicate array (new_arr).
console.log("=========Q 1. new_arr===========");
let new_arr = JSON.parse(JSON.stringify(user));
console.log(new_arr);

//! 2. Print name and gender of unmarrieds.
console.log("=========Q 2.===========");

new_arr.map(value => {
    if (value.marital_status === "unmarried") {
        console.log(`Name: ${value.name} | Gender : ${value.gender}`);
    }
});
// console.log(new_arr);


//! 3. Print name and gender of marrieds whose age is less than 18.
console.log("=========Q 3.===========");
new_arr.filter(value => {
    if (value.age < 18 && value.marital_status=== "married") {
        console.log(`Name: ${value.name} and Gender : ${value.gender}`);
    }
});
// console.log(new_arr);


//! 4. If age is less than 18 , then add property to the object – { eligible_for_marriage : “false” }.
console.log("==========Q 4.==========");
new_arr = new_arr.map(value => {
    if (value.age < 18) {
        value.eligible_for_marriage = "false"
    }
    return value;
});
console.log(new_arr);

//! 5. If age is greater than 17 , then add property to the object – { eligible_for_marriage : “true” }.
console.log("==========Q 5.==========");
new_arr = new_arr.map(value => {
    if (value.age > 17) {
        value.eligible_for_marriage = "true"
    }
    return value;
});
console.log(new_arr);
 

//! 6. In object , gender is mentioned as “m” and “f”  -> change “m” to “male” and change “f” to “female”.
console.log("==========Q 6.==========");
new_arr = new_arr.map(value => {
    if (value.gender === "M") {
        value.gender = "Male"
    } else {
        value.gender = "Female"
    }
    return value;
});
console.log(new_arr);

//! 7. Add a function to every object such that , whenever we call the function it should print updated gender (“male” and “female”) and eligible_for_marriage and name.
console.log("==========Q 7.==========");
new_arr = new_arr.map(value => {
    value.details =  function (){
        console.log(`Name : ${this.name} | Gender : ${this.gender} | Eligible for Marriage : ${this.eligible_for_marriage}`);
        // return `Name : ${this.name} | Gender : ${this.gender} | Eligible for Marriage : ${this.eligible_for_marriage}`;
    };
    return value;
})

console.log(new_arr[5].details());
console.log(new_arr[6].details());
console.log(new_arr[5].age);
console.log(new_arr); 


// //! 8. Delete object at 3rd index.
console.log("==========Q 8.==========");
new_arr.splice(3,1)
console.log(new_arr);

// //! 9. Update the original array with all new properties.
console.log("==========Q 9.==========");

console.log(user);
// user = new_arr.slice(0);
user = JSON.parse(JSON.stringify(new_arr));
console.log(user);

// function and array can be hoisted.
