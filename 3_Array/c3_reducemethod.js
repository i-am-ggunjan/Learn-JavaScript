let arr = [10,-1,5,80,40,50];

let result = arr.reduce((min,value,index,array) => {
    if (value<min) {
        min = value;
    }
    return min;
},0);
console.log(result);


result = arr.reduce((max,value,index,array) => {
    if (value>max) {
        max = value;
    }
    return max;
})
console.log(result);


result = arr.reduce((sum,value,index,array) => {
    sum+= value;
    return sum;
},15)
console.log(result);




// let arr = [10,20,30,40,50];

// var sum = 0;

// for (value of arr) {
//     sum = sum + value
// }
// console.log(sum);