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
        puzzle_img.onmouseout = function() {  puzzle_img.style.setProperty("border-color", "darkmagenta"); }
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
const database = getDatabase(app);

const loginBtn = document.querySelector(".btn");
var emailInput = document.querySelectorAll("input")[0]
var passwordInput = document.querySelectorAll("input")[1];

emailInput.value = "";
passwordInput.value = "";

var emailExistsVar;

function emailExists() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`)).then((snapshot) => {
        const data = snapshot.val();
        
        if(Object.values(data).some(k => k["email"] === emailInput.value)) {
            console.log("Already exists user with this email.");
            emailExistsVar = true;
        }
        else {
            emailExistsVar = false;
        }
    });
      
    return emailExistsVar;
}

loginBtn.addEventListener("click", event => {
    event.preventDefault();

    if(emailExists()) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users`)).then((snapshot) => {
            const data = snapshot.val();
            const user = Object.values(data).filter(k => k["email"] === emailInput.value)[0];
            
            if(user["password"] === passwordInput.value) {
                console.log("You have logged in.");
                
                setTimeout(() => {
                    emailInput.value = "";
                    passwordInput.value = "";

                    console.log(user);
                    window.localStorage.setItem('user', user.username);
                    location.href = "../html/HomePage.html";
                }, 1000); 
            }
            else {
                console.log("Wrong password.");
                passwordInput.setCustomValidity("Wrong password.");
                passwordInput.reportValidity();
            }
        });
    }
    else {
        emailInput.setCustomValidity("Invalid email.");
        emailInput.reportValidity();
    }
})