//ARRAY
//Problem1
var A = [10, 5, 13, 18, 51];
for(let i = 0; i < 5; i++)
{
    console.log(A[i]);
}


//Problem2
var B = new Array(A.length);
console.log(B);

//Problem3
var evenA = A.filter(n => n % 2 == 0);
console.log(evenA);

//Problem4
var AisSmallerThanTen = false;
A.forEach(element => {
    if(element < 10)
    {
        AisSmallerThanTen = true;
    }
});
console.log(AisSmallerThanTen);

var BisSmallerThanTen = false;
B.forEach(element => {
    if(element < 10)
    {
        BisSmallerThanTen = true;
    }
});
console.log(BisSmallerThanTen);

//Problem5
var A3 = A.filter(n => n % 3 == 0);
console.log(A3);

//Problem6
let initialValue = 0;
var sum = A.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sum);

//Problem7
var B = A.slice(-2);
console.log(B);

//DATE
//Problem1
var array = new Array();
array.push(new Date());
console.log(array);

//Problem2
array.push(new Date('08.12.2018 21:00:00'));
console.log(array);

//Problem3
function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}

var array2 = new Array();
array.forEach(element => {
    array2.push({
        daysCount: getDays(element.getYear(), element.getMonth() + 1),
        dayInWeek: element.getUTCDay()
    });
});
console.log(array2);

//Problem4
var array3 = new Array();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
for(let i = 0; i < array.length; i++)
{
    array3.push(
        {
            date: array[i].getDate() + '.' + array[i].getMonth() + '.' + (array[i].getYear() + 1900),
            hours: array[i].getHours() + ':' + array[i].getMinutes() + ':' + array[i].getSeconds(),
            weekday: weekday[array2[i].dayInWeek],
            daysInMonth: array2[i].daysCount
        }
    );
}
console.log(array3);

//ADDITIONAL TASK
//Problem1.1
function ContainsFifty(arr) {
    let contains = arr.filter(n => n == 50);
    return contains.length > 0;
}

//Problem1.2
function SumEqual50(arr) {
    let initialValue = 0;
    var sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    return sum == 50;
}

//Problem1.3
function SumAddTo50(arr) {
    let initialValue = 0;
    var sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    return 50 - sum;
}

//Problem2
function MostFrequentSymbol(str) {
    let alphabet = new Array(26);

    for (let i = 0; i < alphabet.length; i++)
    {
        alphabet[i] = 0;
    };

    for (let i = 0; i < str.length; i++)
    {
        alphabet[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    };

    let maxNum = Math.max(...alphabet);
    let answer = new Array();

    for (let i = 0; i < alphabet.length; i++)
    {
        if (alphabet[i] == maxNum)
        {
            answer.push(String.fromCharCode(97 + i));
        }
    };

    if(answer.length == 1)
    {
        return answer[0];
    }

    return answer;
}

//Problem3
function longestSubArray(array) {
    let counter = 1;
    let maxSubArrayCount = 0;
    for (let i = 1; i < array.length; i++)
    {
        if (array[i] === array[i - 1])
        {
            counter++;
        }
        else
        {
            counter = 1;
        }

        if (counter > maxSubArrayCount)
        {
            maxSubArrayCount = counter;
        }
    }

    return maxSubArrayCount;
};