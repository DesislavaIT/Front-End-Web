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
import { getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
const dbRef = ref(getDatabase());

var username = localStorage.getItem("user");

function compareUsers(user1, user2) {
    if(user1.score < user2.score) {
        return -1;
    }

    if(user1.score > user2.score) {
        return 1;
    }

    if(user1.lastTimeModified < user2.lastTimeModified) {
        return -1;
    }

    if(user1.lastTimeModified > user2.lastTimeModified) {
        return 1;
    }

    if(user1.username < user2.username) {
        return -1;
    }

    if(user1.username > user2.username) {
        return 1;
    }

    return 0;
}

function TurnScoreIntoTime(score)
{
    const seconds = score % 60;
    const minutes = Math.floor((score / 60) % 60);
    const hours = Math.floor((score / 60) / 60);
    var result = `${hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
    return result;
}

get(child(dbRef, `users`)).then((snapshot) => {
    let tbody = document.querySelector("tbody");

    const data = snapshot.val();
    let users = Object.values(data).map(k => k);
    users.sort(compareUsers);
    
    let currentUser = users.filter(k => k["username"] === username)[0];

    for(let i = 0; i < users.length; i++)
    {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${i + 1}</td>
        <td>${users[i].username}</td>
        <td>${(users[i].score === Number.MAX_VALUE ? "No data" : TurnScoreIntoTime(users[i].score))}</td>
        <td>${new Date(users[i].lastTimeModified).toLocaleString()}</td>`;
        if(currentUser === users[i])
        {
            tr.style.backgroundColor = "palevioletred";
        }

        tbody.appendChild(tr);
    }
});

var btn = document.querySelector(".btn");

btn.addEventListener("click", event => {
    location.href = "../html/HomePage.html";
})