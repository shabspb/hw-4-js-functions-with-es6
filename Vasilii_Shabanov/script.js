// 1) Write a function `splitAndMerge`

const splitAndMerge = (str, sp) => str.split(' ').join('').split('').join(sp);

console.log(splitAndMerge("My name is John", " ")); // should return "M y n a m e i s J o h n"  
console.log(splitAndMerge("Hello World!", ",")); // should return "H,e,l,l,o W,o,r,l,d,!"

// 2) Write a function `convert`

const convert = (hash) => Object.entries(hash); // it is amazing way to do this =)))

console.log(convert({
    name: 'Jeremy',
    age: 24,
    role: 'Software Engineer'
})); // should be converted into [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing

const toCamelCase = (str) => str.split(/_|-/).map((word, i) => i ? word[0].toUpperCase() + word.slice(1) : word).join('');

console.log(toCamelCase("the-stealth-warrior")); // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // returns "TheStealthWarrior"

// 4) Write a function that takes a sentence (string) and reverses each word in the sentence

const reverseEachWord = (str) => str.split(' ').map((word) => word.split('').reverse().join('')).join(' ');

console.log(reverseEachWord(" A fun little challenge! ")); // => " A nuf elttil !egnellahc "

// 5) Write a function `stringExpansion`

const stringExpansion = (str) => {
    let strExp = '';
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            for (let j = 1; j < str[i]; j++) {
                if (isNaN(str[i + 1])) strExp += str[i + 1];
            }
        } else {
            strExp += str[i];
        }
    }
    return strExp;
};
// 'for ... of' instead of 'for'
/* const stringExpansion = (str) => {
    let strExp = '';
    str = str.split('')
    for (const [i, value] of str.entries()) {   
        if (!isNaN(value)) {
            for (let j = 1; j < value; j++) {
                if (isNaN(str[i + 1])) strExp += str[i + 1];
            }
        } else {
            strExp += str[i];
        }
   }
    return strExp;
}; */

console.log(stringExpansion('3D2a5d2f')); // === 'DDDaadddddff'
console.log(stringExpansion('3d332f2a')); // === 'dddffaa'
console.log(stringExpansion('abcde')); // === 'abcde'

// 6) Write `largest` and `smallest` functions

const largest = (...num) => Math.max(...num);

const smallest = (...num) => Math.min(...num);

console.log(largest(2, 0.1, -5, 100, 3)); // 100 
console.log(smallest(2, 0.1, -5, 100, 3)); // -5

// 7) Write function `transform`

const transform = (array) => array.map((elem) => (() => elem));

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

console.log(newArray[3]()); // should return 40 
console.log(newArray[4]()); // should return 50

// 8) Write function sum

const sum = (...num) => num.reduce((cur, sum) => cur + sum, 0);

console.log(sum(1, 3, 5, 7)); //should return 16

// 9) Write function `countDown`

const countDown = (num) => {
    return setInterval(() => {
        if (num < 0) clearInterval();
        else {
            console.log(num);
            num--;
        }
    }, 1000);
};

countDown(3); // 3, 2, 1, 0