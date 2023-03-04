// TODO How to perform some task by  event listener? 
// ! HTML Attribute
// We have to add "on" before event name. 
// ?  Eg :- click-onclick

// function color1() {
//     document.querySelector("p").style.backgroundColor = "red";
// }
// function color2() {
//     document.querySelector("p").style.backgroundColor = "yellow";
// }


//! JS Property
// We have to add "on" before event name. 
// ? Eg :- click-onclick, dblclick-ondblclick

// function color1() {
//     document.querySelector("p").style.backgroundColor = "red";
// }
// function color2() {
//     document.querySelector("p").style.backgroundColor = "yellow";
// }

// let p = document.querySelector("p");
// p.onclick = color1();  -- It call functional directly without click
// p.onclick = color1;
// p.ondblclick = color2;


//! Event Listeners
//? addEventListener("event", function)

let p = document.querySelector("p");

p.addEventListener("click", () => {
    p.style.backgroundColor = "red";
})
// p.addEventListener("click", function color() {
//     p.style.backgroundColor = "red";
// })
p.addEventListener("dblclick", () => {
    p.style.backgroundColor = "yellow";
})
