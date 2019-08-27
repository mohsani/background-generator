let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

function getRandomColor() {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while (length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
}

// css.textContent = `${color1.value}   ${color2.value}`;
// css.textContent = body.style.background + ";";

let changeBackground = function() {
    body.style.background = "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
    // css.textContent = `${color1.value}   ${color2.value}`;
    css.textContent = body.style.background + ";";
}

button.addEventListener("click", function(event) {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    changeBackground();
})

changeBackground();

compBodyStyles = window.getComputedStyle(body);
css.textContent = compBodyStyles.getPropertyValue('background-image') + ";";

// color1.addEventListener("input", changeBackground);
//
// color2.addEventListener("input", changeBackground);