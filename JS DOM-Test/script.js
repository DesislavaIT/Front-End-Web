// your code here

const input = document.querySelector(".input");

const numberBtns = document.querySelectorAll(".action");
const orangeBtns = document.querySelectorAll(".orange");
const onesBtns = document.querySelectorAll(".action-btn");

var numEntered = false;

var num1 = 0;
var num2 = 0;
var sign = "";
var equation = "";

const clearBtn = document.querySelector(".clear");

numberBtns[4].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "7";
    if(numEntered) {
        numEntered = false;
        input.value = 7;
    }
    else {
        input.value = input.value * 10 + 7;
    }
})

numberBtns[5].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "8";
    if(numEntered) {
        numEntered = false;
        input.value = 8;
    }
    else {
        input.value = input.value * 10 + 8;
    }
})

numberBtns[6].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "9";
    if(numEntered) {
        numEntered = false;
        input.value = 9;
    }
    else {
        input.value = input.value * 10 + 9;
    }
})

numberBtns[8].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "4";
    if(numEntered) {
        numEntered = false;
        input.value = 4;
    }
    else {
        input.value = input.value * 10 + 4;
    }
})

numberBtns[9].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "5";
    if(numEntered) {
        numEntered = false;
        input.value = 5;
    }
    else {
        input.value = input.value * 10 + 5;
    }
})

numberBtns[10].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "6";
    if(numEntered) {
        numEntered = false;
        input.value = 6;
    }
    else {
        input.value = input.value * 10 + 6;
    }
})

numberBtns[12].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "1";
    if(numEntered) {
        numEntered = false;
        input.value = 1;
    }
    else {
        input.value = input.value * 10 + 1;
    }
})

numberBtns[13].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "2";
    if(numEntered) {
        numEntered = false;
        input.value = 2;
    }
    else {
        input.value = input.value * 10 + 2;
    }
})

numberBtns[14].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "3";
    if(numEntered) {
        numEntered = false;
        input.value = 3;
    }
    else {
        input.value = input.value * 10 + 3;
    }
})

numberBtns[16].addEventListener("click",  (event) => {
    clearBorder();
    equation = equation + "0";
    if(numEntered) {
        numEntered = false;
        input.value = 0;
    }
    else {
        input.value = input.value * 10 + 0;
    }
})

function clearBorder() {
    orangeBtns[0].style.border = "1px black";
    orangeBtns[1].style.border = "1px black";
    orangeBtns[2].style.border = "1px black";
    orangeBtns[3].style.border = "1px black";
    orangeBtns[4].style.border = "1px black";

    onesBtns[0].style.border = "1px black";
    onesBtns[1].style.border = "1px black";
    onesBtns[2].style.border = "1px black";
}

function addHistory(result) {
    let ul = document.querySelector(".calculation-list");
    const li = document.createElement("li");
    li.innerHTML = `${equation} = ${result}`;
    ul.appendChild(li);
}

orangeBtns[0].addEventListener("click",  (event) => {
    orangeBtns[0].style.border = "1px solid black";
    equation = equation + " / ";
    if(sign !== "") {
        num1 = eval(`${num1} ${sign} ${input.value}`);
        input.value = num1;
    }
    else {
        num1 = input.value;
    }
    
    sign = "/";
    numEntered = true;
})

orangeBtns[1].addEventListener("click",  (event) => {
    orangeBtns[1].style.border = "1px solid black";
    equation = equation + " * ";
    if(sign !== "") {
        num1 = eval(`${num1} ${sign} ${input.value}`);
        input.value = num1;
    }
    else {
        num1 = input.value;
    }
    
    sign = "*";
    numEntered = true;
})

orangeBtns[2].addEventListener("click",  (event) => {
    orangeBtns[2].style.border = "1px solid black";
    equation = equation + " - ";
    if(sign !== "") {
        num1 = eval(`${num1} ${sign} ${input.value}`);
        input.value = num1;
    }
    else {
        num1 = input.value;
    }
    
    sign = "-";
    numEntered = true;
})

orangeBtns[3].addEventListener("click",  (event) => {
    orangeBtns[3].style.border = "1px solid black";
    equation = equation + " + ";
    if(sign !== "") {
        num1 = eval(`${num1} ${sign} ${input.value}`);
        input.value = num1;
    }
    else {
        num1 = input.value;
    }
    
    sign = "+";
    numEntered = true;
})

orangeBtns[4].addEventListener("click",  (event) => {
    addHistory(eval(`${num1} ${sign} ${input.value}`))
    equation = "";
    num2 = input.value;
    numEntered = true;
    input.value = eval(`${num1} ${sign} ${num2}`);
    num1 = 0;
    equation = "";
    sign = "";
    clearBorder();
    orangeBtns[4].style.border = "1px solid black";
})

onesBtns[0].addEventListener("click",  (event) => {
    clearBorder();
    onesBtns[0].style.border = "1px solid black";
    input.value = 0;
    num1 = 0;
    equation = "";
    sign = "";
})

onesBtns[1].addEventListener("click",  (event) => {
    clearBorder();
    onesBtns[0].style.border = "1px solid black";
    num1 = input.value;
    num1 = Math.sqrt(num1);
    numEntered = true;
    input.value = num1;
})

onesBtns[2].addEventListener("click",  (event) => {
    clearBorder();
    onesBtns[0].style.border = "1px solid black";
    num1 = input.value;
    num1 = num1 * num1;
    numEntered = true;
    input.value = num1;
})

clearBtn.addEventListener("click",  (event) => {
    clearBorder();
    let ul = document.querySelector(".calculation-list");
    const liArr = ul.children;
    let arr = Array.from(liArr);
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        ul.removeChild(arr[i]);
    }
})