//! Map - A map is a collection of key-value pair.

let new_map = new Map([['name','Gaurav'],[1,5],['age',22]]);
console.log(new_map.size );

for (let[key,value] of new_map) {
    // console.log(key+':'+value);
    console.log(`${key}:${value}`);
}

console.log(new_map.set('gender','Male'))
console.log(new_map.get(1));

// console.log(new_map.clear());
new_map.delete('name')
console.log(new_map)