let arr = [10,20,50,40,30];

// Copy the array element.
function copy(array){
    let new_arr =[];

    for(let i =0, j=0; i<array.length; i++,j++){
        new_arr[j]=array[i]
    }
    return new_arr;
}
console.log(copy(arr));

// Logic for reverse the array.
function rev(array){
    let new_arr =[];

    for(let i=arr.length-1, j=0; i>=0; i--,j++){
        new_arr[j]=array[i]
    }
    return new_arr;
}
// console.log(rev(arr));

// Logic for sorting the array   
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
        if(arr[j] < arr[j+1]) {
            //swap
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);


// Logic for sum of array.
let sum = 0;
for(index in arr){
    sum = sum + arr[index]
}
for(value of arr){
    sum =sum+value;
}
// console.log(sum);

// Logic for largest largest element
let max = 0;
for(value of arr){
    if(value>max){
        max=value;
    }
}
// console.log(max);

// Logic for smallest value in array 
let min = arr[0];
for(value of arr){
    if (value<min) {
        min = value;
    }
}
// console.log(min);



arr.sort((a,b) => a-b);
console.log(arr.sort((a,b) => a-b));


