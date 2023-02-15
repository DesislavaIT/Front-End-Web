localStorage.clear();

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

const signUpBtn = document.querySelector(".btn");
var usernameInput = document.querySelectorAll("input")[0];
var emailInput = document.querySelectorAll("input")[1]
var passwordInput = document.querySelectorAll("input")[2];
var passwordRepeatInput = document.querySelectorAll("input")[3];

usernameInput.value = "";
emailInput.value = "";
passwordInput.value = "";
passwordRepeatInput.value = "";

var usernameExistsVar;
var emailExistsVar;

function setInitialTitles() {
    usernameInput.setCustomValidity("This field is required!");
    emailInput.setCustomValidity("Your email should be in format: example@mail.com");
    passwordRepeatInput.setCustomValidity(passwordRepeatInput.title);
    passwordInput.setCustomValidity(passwordRepeatInput.title);
}

setInitialTitles();

//validations
function checkInput() {
    setInitialTitles();
    if (usernameInput.validity.typeMismatch || usernameInput.value === "") {
        usernameInput.reportValidity();
        return false;
    }

    if (emailInput.validity.typeMismatch || emailInput.value === "") {
        emailInput.reportValidity();
        return false;
    }

    if (passwordInput.validity.patternMismatch || passwordInput.value === "") {
        passwordInput.reportValidity();
        return false;
    }

    if (passwordRepeatInput.validity.patternMismatch || passwordRepeatInput.value === "") {
        passwordRepeatInput.reportValidity();
        return false;
    }

    return true;
}

function usernameExists() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`)).then((snapshot) => {
        const data = snapshot.val();

        if(Object.values(data).some(k => k["username"] === usernameInput.value)) {
            console.log("Already exists user with this username.");
            usernameExistsVar = true;
        }
        else {
            usernameExistsVar = false;
        }
    });

    return usernameExistsVar;
}

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

function passwordsMatch() {
    if(passwordInput.value !== passwordRepeatInput.value) {
        return false;
    }

    return true;
}

signUpBtn.addEventListener("click", event => {
    event.preventDefault();

    if(checkInput() && !usernameExists() && !emailExists() && passwordsMatch()) {
        const usersRef = ref(database, `users/${usernameInput.value}`);
        const user = {
            "username": `${usernameInput.value}`,
            "email": `${emailInput.value}`,
            "password": `${passwordInput.value}`,
            "easy": Number.MAX_VALUE,
            "medium": Number.MAX_VALUE,
            "hard": Number.MAX_VALUE,
            "lastTimeModified": Date.now()
        };

        set(usersRef, user);

        setTimeout(() => {
            usernameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            passwordRepeatInput.value = "";

            window.localStorage.setItem('user', user.username);
            location.href = "../html/HomePage.html";
        }, 1000); 
    }
    else if(usernameExists()) {
        usernameInput.setCustomValidity("Already exists user with this username.");
        usernameInput.reportValidity();
    }
    else if(emailExists()) {
        emailInput.setCustomValidity("Already exists user with this email.");
        emailInput.reportValidity();
    }
    else if(passwordInput.value !== passwordRepeatInput.value) {
        passwordRepeatInput.setCustomValidity("Passwords don't match.");
        passwordRepeatInput.reportValidity();
    }
})