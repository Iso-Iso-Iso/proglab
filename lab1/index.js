const readlineSync = require("readline-sync");

const addRandNumberToArray = (array) => {
    const rand = Math.floor(Math.random() * 100);
    array.push(rand);
};

const isCorrectInput = (input) => !isNaN(+input);


const firstArray = [];
const secondArray = [];

let numberOfElementsFirst = readlineSync.question("Please, enter length of first array \n");
let numberOfElementsSecond = readlineSync.question("Please, enter length of second array \n");

if (!isCorrectInput(numberOfElementsFirst) || !isCorrectInput(numberOfElementsSecond)) {
    console.log("incorrect input value, aborting process");
    process.exit(2);
}


for (let i = 0; i < +numberOfElementsFirst; i++) {
    addRandNumberToArray(firstArray);
}

for (let i = 0; i < +numberOfElementsSecond; i++) {
    addRandNumberToArray(secondArray);
}

console.log("First array:", firstArray);
console.log("Second array:", secondArray);

firstArray.reverse();
secondArray.reverse();

const longerArray = firstArray.length > secondArray.length ? firstArray : secondArray;
const shorterArray = firstArray.length > secondArray.length ? secondArray : firstArray;

const sumArray = longerArray.map((item, index) => {
    return item + (shorterArray[index] ?? 0);
});

console.log("Array of sum: ", sumArray.reverse());
