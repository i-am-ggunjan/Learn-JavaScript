let body = document.body;
console.log(body);

//! Bharat Section 
let bharat_sec = document.createElement("section");
body.insertAdjacentElement("afterbegin", bharat_sec);
// body.appendChild("bharat_sec");

bharat_sec.classList.add("top");
bharat_sec.style.backgroundColor = "blue"
bharat_sec.style.padding = "15px 100px"


let bharat = document.createElement("span");
let cross = document.createElement("span");

bharat.innerHTML = "भारत(हिंदी)";
cross.innerHTML = "x";
bharat.style.color = "white";
cross.style.color = "white";

bharat_sec.insertAdjacentElement("afterbegin", bharat)
bharat_sec.insertAdjacentElement("beforeend", cross)

bharat_sec.style.display = "flex";
bharat_sec.style.justifyContent = "space-between";
bharat_sec.style.alignItems = "center";

//! Header Seaction 
let header = document.createElement("header");
//? bharat_sec.insertAdjacentElement("afterend", header);
body.appendChild(header);

header.classList.add("header");
header.style.backgroundColor = "black"
header.style.padding = "10px 100px";

let header_article = document.createElement("article");
//? header.insertAdjacentElement("afterbegin", header_article);
header.appendChild(header_article);


let header_img = document.createElement("div");
let header_nav = document.createElement("nav");

header_article.insertAdjacentElement("afterbegin", header_img);
header_article.insertAdjacentElement("beforeend", header_nav);

let header_nav_ul = document.createElement("ul");
header_nav.appendChild(header_nav_ul);


let header_nav_ul_li1 = document.createElement("li");
let header_nav_ul_a1 = document.createElement("a");
let header_nav_ul_li2 = document.createElement("li");
let header_nav_ul_a2 = document.createElement("a");
let header_nav_ul_li3 = document.createElement("li");
let header_nav_ul_a3 = document.createElement("a");
let header_nav_ul_li4 = document.createElement("li");
let header_nav_ul_a4 = document.createElement("a");
let header_nav_ul_li5 = document.createElement("li");
let header_nav_ul_a5 = document.createElement("a");





// function li(name){ 
//     return `<li><a href=''>${name}</a> </li>`
// }

// header_nav_ul.innerHTML+=  `${li("home")}`
// header_nav_ul.innerHTML+=  `${li("contact us")}`
// console.log(header_nav_ul);

header_nav_ul.appendChild(header_nav_ul_li1);
header_nav_ul.appendChild(header_nav_ul_li2);
header_nav_ul.appendChild(header_nav_ul_li3);
header_nav_ul.appendChild(header_nav_ul_li4);
header_nav_ul.appendChild(header_nav_ul_li5);

header_nav_ul_li1.appendChild(header_nav_ul_a1); 
header_nav_ul_li2.appendChild(header_nav_ul_a2);
header_nav_ul_li3.appendChild(header_nav_ul_a3);
header_nav_ul_li4.appendChild(header_nav_ul_a4);
header_nav_ul_li5.appendChild(header_nav_ul_a5);

header_nav_ul_a1.innerHTML = "HOME";
header_nav_ul_a2.innerHTML = "SERVICE";
header_nav_ul_a3.innerHTML = "ABOUT";
header_nav_ul_a4.innerHTML = "LOGIN";
header_nav_ul_a5.innerHTML = "SIGNUP";

header_nav_ul_a1.style.color = "white";
header_nav_ul_a2.style.color = "white";
header_nav_ul_a3.style.color = "white";
header_nav_ul_a4.style.color = "white";
header_nav_ul_a5.style.color = "white";

header_img.style.backgroundImage = "url(Image/Spotify.png)";
header_img.style.height = "36px";
header_img.style.width = "120px";
header_img.style.backgroundSize = "cover"
header_img.style.backgroundRepeat = "no-repeat";


header_nav_ul.style.display = "flex";
header_nav_ul.style.gap = "20px";
header_nav.style.display = "flex";


header_article.style.display = "flex";
header_article.style.justifyContent = "space-between";
header_article.style.alignItems = "center";

//! Footer Section 
let Footer = document.createElement("footer");
// bharat_sec.insertAdjacentElement("afterend", header);
body.appendChild(Footer);

Footer.classList.add("footer");
Footer.style.backgroundColor = "orange"
Footer.style.padding = "50px 100px";