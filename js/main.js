
const button = document.querySelector(".js-btn");
let btnPressed = false;
let htmlSelector = document.querySelector('html');
let htmlBg = htmlSelector.style.background;
let htmlColor = htmlSelector.style.color;

button.addEventListener("click", function(){
    if(!btnPressed) {
        btnPressed = true;
        htmlSelector.style.background = "#000";
        htmlSelector.style.color = "#fff";
        button.innerText = "Nå ble det mørkt gitt!";
    } else {
        btnPressed = false;
        htmlSelector.style.background = htmlBg;
        htmlSelector.style.color = htmlColor;
        button.innerText = "Nå ble det lyst igjen!";
    }
});