function isPalindrom(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function getPalindroms(array) {
    let resultArray = new Array();
    for(let i = 0; i < array.length; i++) {
        if(isPalindrom(array[i])) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

let input = ["abccba", "lalala", "something", "123321", "debel lebed"];
let output = getPalindroms(input);
console.log(output);