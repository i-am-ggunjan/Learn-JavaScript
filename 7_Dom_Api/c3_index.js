let body = document.body;
console.log(body);

let div = document.querySelectorAll(".container");
//! How to create element using DOM ?
//? Syntax :- document.createElement("tag_name") 
// It will return object of tag_name, we have passed.

let h1 = document.createElement("h1");
// After creating, we have to insert it into DOM

//! How to insert element ?
//? 1.appendChild(element we want to insert)  
// targeted_element.appendChild(created_element(object))  
// It will insert element at last child.
div[0].appendChild(h1);

//? 2.insertAdjacentElement("position", element we want to insert)
// targeted_element.insertAdjacentElement("position", element we want to insert)
// TODO // position :- beforebegin afterbegin beforeend afterend
div[0].insertAdjacentElement("afterend", h1);


//! How to insert(set) and remove Attribute?
//? 1. setAttribute("attibute_name", "value")
h1.setAttribute("id", "bombi");
h1.setAttribute("class", "chomba nimbi");
h1.setAttribute("class", "chombi"); // It override the previous value_name of attribute.
//? 2. removeAttribute("attibute_name")
h1.removeAttribute("id");


//TODO // best way to add class attribute by using :-
//? classList.add/remove("value_1", "value_2")
h1.classList.add("gaurav", "gunjan");
h1.classList.remove("bombi");

