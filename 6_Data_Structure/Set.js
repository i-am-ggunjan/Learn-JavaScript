//! Set - It is a collection of unique elements.

let arr = [10,20,30,50,60,10,50,30,20,60,40,80,90];
// console.log(arr);

let new_set = new Set(arr);
// let new_arr = Array.from(new_set);

// console.log(new_set);
// console.log(new_arr);
console.log(new_set.size)

for(value of new_set){
    console.log(value);
}


//! Set Mathod :-
console.log("========= Set Method =========");
console.log(new_set.size);

console.log(new_set.has(10)); 
//? It not delete it only check
new_set.add(85)
console.log(new_set.add(1000));

// console.log(new_set.clear());
new_set.clear();

console.log(new_set.delete(10));
//  It will delete the value if available in Set.
// It will return true, if value is available in Set.
// It will return false, if value is not available in Set.

 