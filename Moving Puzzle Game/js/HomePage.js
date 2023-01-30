const puzzle_img = document.getElementById("puzzle_img");
const nav = document.querySelector("nav");
const header_div = document.getElementById("header_div");

puzzle_img.onmouseover = function() {  puzzle_img.style.setProperty("border-color", "white"); }
puzzle_img.onmouseout = function() {  puzzle_img.style.setProperty("border-color", "darkmagenta") }
    
var showNav = true;

puzzle_img.addEventListener("click", function() {
    if(showNav) {
        showNav = false;
        header_div.style.setProperty("border", "2px white solid");
        nav.style.setProperty("display", "block");
        puzzle_img.style.setProperty("border-color", "darkmagenta");
        puzzle_img.onmouseover = function() {  puzzle_img.style.setProperty("border-color", "darkmagenta"); }
        puzzle_img.onmouseout = function() {  puzzle_img.style.setProperty("border-color", "darkmagenta") }
    }
    else
    {
        showNav = true;
        header_div.style.setProperty("border", "none");
        nav.style.setProperty("display", "none");
        puzzle_img.style.setProperty("border-color", "white");
        puzzle_img.onmouseover = function() {  puzzle_img.style.setProperty("border-color", "white"); }
        puzzle_img.onmouseout = function() {  puzzle_img.style.setProperty("border-color", "darkmagenta") }
    }
});

// TODO:
// const selectElement = document.querySelector("#size");

// function changeSize () {
//     switch(selectElement.value) {
//         case "Easy":
//             console.log("Easy");
//             break;
//         case "Medium":
//             console.log("Medium");
//             break;
//         case "Hard":
//             console.log("Hard");
//             break;
//     }
// }

// changeSize();

// selectElement.addEventListener("change", function() {
//     changeSize();
// });

var start_btn = document.querySelectorAll(".btn")[0];
var ranking_btn = document.querySelectorAll(".btn")[1];

start_btn.addEventListener("click", event => {
    location.href = "../html/Game.html";
})

ranking_btn.addEventListener("click", event => {
    location.href = "../html/Ranking.html";
})