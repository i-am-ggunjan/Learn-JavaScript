let body = document.body;

let h1 = document.querySelector("h1");

let btn_stop = document.querySelector(".stop");
let btn_lap = document.querySelector(".lap");
let btn_resume = document.querySelector(".resume");

let ol = document.querySelector("ol");


let sec = 0;
let min = 58;
let hr = 1;

let id = setInterval(() => {
    h1.innerHTML = `${hr} : ${min} : ${sec++}`;

    if (sec === 59) {
        min++;
        sec = 0;
    }

    if (min === 59) {
        hr++;
        min = 0;
        // sec = 0;
    }
}, 300);

let id2 = setInterval(() => {
    h1.innerHTML = `${hr} : ${min} : ${sec++}`;

    if (sec === 59) {
        min++;
        sec = 0;
    }

    if (min === 59) {
        hr++;
        min = 0;
        // sec = 0;
        
    }
}, 300);


function printTime() {
    ol.innerHTML += `<li>
        ${hr} : ${min} : ${sec}
    </li>`
}
btn_lap.addEventListener("click", printTime);

function stopTime() {
    clearInterval(id);
}

function resume() {
    alert("i just clicked")
    btn_stop.removeEventListener("click", stopTime)
}

btn_stop.addEventListener("click", stopTime)
btn_resume.addEventListener("click", resume)
