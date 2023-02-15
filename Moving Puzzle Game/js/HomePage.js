if(!localStorage.user) {
    location.href = "../html/Login.html";
}

///////////////////////////////////////////////////////////////////////////////////
// NAV FUNCTIONALITY:

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

///////////////////////////////////////////////////////////////////////////////////

const selectElement = document.querySelector("#size");
const start_btn = document.querySelectorAll(".btn")[0];
const ranking_btn = document.querySelectorAll(".btn")[1];

//helper function
function checkSize () {
    switch(selectElement.value) {
        case "Easy":
            return "Easy";
        case "Medium":
            return "Medium";
        case "Hard":
            return "Hard";
    }
}

//buttons functionality
start_btn.addEventListener("click", event => {
    const size = checkSize();
    window.localStorage.setItem('size', size);
    if(size === "Easy") {
        location.href = "../html/Game_3x3.html";
    }
    else if(size === "Medium") {
        location.href = "../html/Game_4x4.html";
    }
    else if(size === "Hard") {
        location.href = "../html/Game_5x5.html";
    }
})

ranking_btn.addEventListener("click", event => {
    location.href = "../html/Ranking.html";
})