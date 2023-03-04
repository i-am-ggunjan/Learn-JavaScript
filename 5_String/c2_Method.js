//  String method

let str = "chombI";
console.log(str);
console.log("===========");

// toLowerCase :- It will return the lower case string.
console.log(str.toLowerCase());
// toUpperCase :- It will return the upper case string.
console.log(str.toUpperCase());


// incudes("character") :- It will check whether character is available or not.
console.log(str.includes("c"));
// indexOf("character") :- It will return index if character is available. If character is not available then it will return -1.
console.log(str.indexOf("I"));


// startsWith("character") :- It will check the character at 0th index. If it is available then it will return true else it will return false.
console.log(str.startsWith("C"));
// endsWith("character") :- It will check the character at last index. If it is available then it will return true else it will return false.
console.log(str.endsWith("I"));
console.log("=======");


// slice(starting_index , ending_index-1) :- It will return string of copied character.
console.log(typeof(str.slice(0,-2) ));
// console.log(typeof str.slice(0,3)); // We can check the type 
// substring(starting_index , ending_index-1) :- It will return string of copied character.
console.log(str.substring(0,4));
// subString not take negative value while slice take both negative and positive value.


// charCodeAt(index) :- It will return unicode.
console.log(str.charCodeAt(0));
