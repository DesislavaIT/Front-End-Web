var btns = document.querySelectorAll(".action_btn");

var startBtn = document.querySelector(".btn");

var size = Math.sqrt(btns.length);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var result = [1, 2, 3, 4, 5, 6, 7, 8];

const win = document.createElement("h1");
win.innerHTML = `You win`;

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

function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}

for(let i = 0; i < btns.length; i++) {
    btns[i].style.color = "buttonface";
}

startBtn.addEventListener("click", function() {
    for(let i = 1; i < btns.length; i++) {
        btns[i].style.color = "buttontext";
    }

    array = shuffle(array);
    for(let i = 1; i < btns.length; i++) {
        btns[i].innerHTML = array[i - 1];
    }

    startBtn.innerHTML = "Restart";
});

function checkForWin() {
    for(let i = 0; i < array.length; i++)
    {
        if(btns[i].innerHTML != result[i]) {
            return false;
        }
    }

    return true;
}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if(i + 1 > size) {
            if(btns[i - size].innerHTML === ".") {
                btns[i - size].innerHTML = btns[i].innerHTML;
                btns[i - size].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if(i + 1 <= btns.length - size) {
            if(btns[i + size].innerHTML === ".") {
                btns[i + size].innerHTML = btns[i].innerHTML;
                btns[i + size].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if((i + 1) % size !== 0) {
            if(btns[i + 1].innerHTML === ".") {
                btns[i + 1].innerHTML = btns[i].innerHTML;
                btns[i + 1].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }

        if((i + 1) % size !== 1) {
            if(btns[i - 1].innerHTML === ".") {
                btns[i - 1].innerHTML = btns[i].innerHTML;
                btns[i - 1].style.color = "buttontext";
                btns[i].innerHTML = ".";
                btns[i].style.color = "buttonface";
            }
        }
        
        if(checkForWin()) {
            document.body.appendChild(win);
        }
    });
}