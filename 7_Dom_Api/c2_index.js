let body = document.body;
// console.log(body);

//! Target Child
//? 1.children  2.childNode
// children - It will return HTML element.
// childNode - It will return node.
//? console.log(body.children[0]);
// console.log(body.children[0].children[0]);


//! Target Parent
//? 1.parentNode   2.parentElement
// parentNode - It will return parent node.
// parentElement - It will return HTML parent element of that element.
// console.log(body.parentElement);
// console.log(document.documentElement);

// let div = document.getElementsByClassName("container")[0]; 
// let div = document.querySelectorAll(".container")[0];
// console.log(div.parentElement);
// console.log(div.parentNode);

// let p = document.querySelectorAll(".item");
// console.log(p[0].parentElement);
// console.log(p[4].parentNode);
// console.log(p);
// console.log(p.parentElement);


//! Target Sibling
//? 1.nextSibling   2.nextElementSibling
// nextSibling - It will return next sibling node.
// nextElementSibling - It will return next HTML element sibling.
// let div = document.querySelectorAll(".container");
// console.log(div);
// console.log(div[0].nextElementSibling);


