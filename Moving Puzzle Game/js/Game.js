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
// DATABASE:

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, get, set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBjNxvdaH5UGglI1E9XOCvFuW6vzMbAir8",
    authDomain: "mpg-web-e6701.firebaseapp.com",
    projectId: "mpg-web-e6701",
    storageBucket: "mpg-web-e6701.appspot.com",
    messagingSenderId: "890148496230",
    appId: "1:890148496230:web:632fdb5725a041e87a9ea7",
    measurementId: "G-8SZXED085D"
};
  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
  
//initialize variables
var btns = document.querySelectorAll(".action_btn");

var startBtn = document.querySelector(".btn");

if(!localStorage.getItem("size")) {
    window.localStorage.setItem('size', "Easy");
}

var sizeText = localStorage.getItem("size").toLowerCase();

var size = 0;

switch(sizeText) {
    case "easy":
        size = 9;
        break;
    case "medium":
        size = 16;
        break;
    case "hard":
        size = 25;
        break;
}

var rowSize = Math.sqrt(size);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var result = [1, 2, 3, 4, 5, 6, 7, 8];

var seconds = 0;
var minutes = 0;
var hours = 0;

var timerDiv = document.querySelector("#timer");

var timer;

var restart = false;

var username = window.localStorage.getItem("user");

switch(size) {
    case 9:
        array = [1, 2, 3, 4, 5, 6, 7, 8];
        result = [1, 2, 3, 4, 5, 6, 7, 8];
        break;
    case 16:
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        break;
    case 25:
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        break;
}

//shuffle function for randomizing array
function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}

//disable action buttons at first
for(let i = 0; i < btns.length; i++)
{
    btns[i].disabled = true;
}

//set the last action button to be the empty one
btns[btns.length - 1].style.color = "buttonface";

startBtn.addEventListener("click", function() {
    //enable all action buttons
    for(let i = 0; i < btns.length; i++) {
        btns[i].style.fontWeight = "normal";
        btns[i].disabled = false;
    }

    timerDiv.style.fontWeight = "normal";
    timerDiv.style.color = "white";

    for(let i = 1; i < btns.length; i++) {
        btns[i].style.color = "buttontext";
    }

    array = shuffle(array);
    //assign values to the action buttons corresponding to the shuffled array
    for(let i = 1; i < btns.length; i++) {
        btns[i].innerHTML = array[i - 1];
    }

    //set the first action button to be the empty one
    btns[0].style.color = "buttonface";
    btns[0].innerHTML = ".";

    seconds = 0;
    minutes = 0;
    hours = 0;

    //check if we need to start a new timer
    if(startBtn.innerHTML === "Start" || restart) {
        restart = false;

        timerDiv.innerHTML = `${hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        timer = setInterval(() => {
            seconds++;
            if(seconds === 60) {
             seconds = 0;
             minutes++;
            }
        
            if(minutes === 60) {
             minutes = 0;
             hours++;
            }
        
            timerDiv.innerHTML = `${hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
        }, 1000);
    }

    startBtn.innerHTML = "Restart";
});

//helper functions
function checkForWin() {
    for(let i = 0; i < btns.length - 1; i++)
    {
        if(btns[i].innerHTML != result[i]) {
            return false;
        }
    }

    return true;
}

function getScore()
{
    return (hours * 60 + minutes) * 60 + seconds;
}

//buttons moving logic
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if(i + 1 > rowSize) { //check up
            if(btns[i - rowSize].innerHTML === ".") {
                btns[i - rowSize].innerHTML = btns[i].innerHTML;
                btns[i - rowSize].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if(i + 1 <= btns.length - rowSize) { //check down
            if(btns[i + rowSize].innerHTML === ".") {
                btns[i + rowSize].innerHTML = btns[i].innerHTML;
                btns[i + rowSize].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if((i + 1) % rowSize !== 0) { //check right
            if(btns[i + 1].innerHTML === ".") {
                btns[i + 1].innerHTML = btns[i].innerHTML;
                btns[i + 1].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if((i + 1) % rowSize !== 1) { //check left
            if(btns[i - 1].innerHTML === ".") {
                btns[i - 1].innerHTML = btns[i].innerHTML;
                btns[i - 1].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }
        
        //check if the last combination is the winning one
        if(checkForWin()) {
            //some style
            for(let i = 0; i < btns.length - 1; i++) {
                btns[i].style.color = "darkmagenta";
                btns[i].style.fontWeight = "bold";
            }

            timerDiv.style.fontWeight = "bold";
            timerDiv.style.color = "#C0C0C0";

            const dbRef = ref(getDatabase());
            get(child(dbRef, `users`)).then((snapshot) => {
                const data = snapshot.val();
                var user = Object.values(data).filter(k => k.username === username)[0];
                var score = getScore();

                //update database
                switch (sizeText) {
                    case "easy":
                        if(score < user.easy)
                        {   
                            user.easy = score;
                        }
                        break;
                    case "medium":
                        if(score < user.medium)
                        {   
                            user.medium = score;
                        }
                        break;
                    case "hard":
                        if(score < user.hard)
                        {   
                            user.hard = score;
                        }
                        break;
                }

                user.lastTimeModified = Date.now();
                const usersRef = ref(database, `users/${user.username}`);
                set(usersRef, user);
            })

            clearInterval(timer);
    
            restart = true;
        }
    });
}