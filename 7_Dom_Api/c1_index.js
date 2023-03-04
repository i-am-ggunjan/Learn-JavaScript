//! How to target HTML tag ?
//* console.log(document.documentElement);
//? console.log(body.parentElement);


//! How to target Head tag ?
// console.log(document.head);
// console.log(document.documentElement.children[0]); // target Head tag

//! How to target Body tag ?
// console.log(document.body);
// console.log(document.documentElement.children[1]); // target Head tag



//! By Id 
// Syntax :- document.getElementById("id_name")
//? It will return single element's 
//// console.log(document.getElementById("p1"));
// let p1 = document.getElementById("p1");
// p1.style.backgroundColor = "blue";
// p1.style.width = "100px";



//! By Class
// Syntax :- document.getElementByClassName("class_name")
//? It will return HTML collection of elements.
// console.log(document.getElementsByClassName("item"));
// let p2 = document.getElementsByClassName("item");
// p2[0].style.color= "red";
// p2[3].style.color= "red";

//* for (value of p2){
//*     value.style.color = "green";
//* }
//// console.log(Array.isArray(p2)); // Checking it is array or not.



//! By Tagname
// Syntax :- document.getElementByTagName("tag_name")
//? It will return HTML collection of elements.
//// console.log(document.getElementsByTagName("p"));
// let p3 = document.getElementsByTagName("p");
// console.log(p3);



//TODO Target elements using CSS Query

//! 1. querySelector("css_query")
//* It will target first element that matches with CSS Query.
//? It will not return HTML collection.
// let p4 = document.querySelector("a");
// p4 = document.querySelector("#chomba");
// p4 = document.querySelector(".item");
// p4 = document.querySelector(".container");
// p4 = document.querySelector("a[href]");
// p4 = document.querySelector("p[class]");
//// console.log(p4);

//! 2. querySelectorAll("css_query")
//* It will target all element that matches with CSS Query.
//? It will return Nodelist.

let p5 = document.querySelectorAll(".item");
// p5 = document.querySelectorAll("p[class]");
console.log(p5);
console.log(p5[0]);
// p5[1].style.color = "green";
//* for (value of p5) {
//*     value.style.color = "red";
//* }