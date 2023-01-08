const puzzle_img = document.getElementById("puzzle_img");
const nav = document.querySelector("nav");
const header_div = document.getElementById("header_div");
const body = document.querySelector("body");

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