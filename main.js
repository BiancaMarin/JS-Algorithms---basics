console.log('Hello world...');

// 1. //Display in the console:

// 1.1. The numbers from 1 to 20 on a single line as text separated by ";" like this: 1;2;3;4;5;6...//

let text = '';
for (let i = 0; i <= 20; i++) {
  text += i + ';';
}
console.log(text);

// 1.2. //Display in the console: The odd numbers from 1 to 20 (each on it's own line)//

let number = 20;

for (let i = 2; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. //Create a function that:

// 2.1. Computes the maximum of all the numbers in an array and returns it (don't use Math.max or any built in function, use control structures) (function maxOfArr(arr) { } )//

let array = [3, 8, 20, 56, 4, 6, 76];

function maxOfArr(arr) {
  let max = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

maxOfArr(array);

// 2.2 Computes how many times a certain item appears in an array and returns the number (function countItem(arr, item) { } )//

function countItemArr(item, arr) {
  let countItem = 0;
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      countItem++;
    }
  }
  return countItem;
}

countItemArr(15, [15, 60, 45, 15, 60, 28]);

// // Challenges

// // 1. Using nested for statements (unul intr-altul) generate the following pattern in the console (hint: each line can be a line of text separated by space like in the first point of the homework)

let text1 = '';
let text2 = '';

for (let m = 0; m < 1; m++) {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        text1 += k + '';
      }
    }
    console.log(text1);
  }

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 1; k >= 0; k--) {
        text2 += k + '';
      }
    }
    console.log(text2);
  }
  console.log(text1);
  console.log(text2);
}

// 2. Create a function that takes one number as the input and displays in the console all numbers starting from 1 going all the way up to the input one by one. Instead of numbers that are divisible by 3 display 'fizz'. Instead of numbers divisible by 5 display 'buzz', instead of numbers divisible by both 3 and 5 display 'fizzbuzz'. function fizzbuzz(num) { }

function getUserNumber(message) {
  const input = prompt(message);
  const number = Number(input);

  if (input === '' || input === null) {
    console.log('Please input a number');
  }

  if (Number.isNaN(number)) {
    console.log('Please input a valid number!');
  }
  return number;
}

const divisibleNumbers = getUserNumber('Please input a number');

for (let i = 1; i <= divisibleNumbers; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else {
    if (i % 3 === 0) {
      console.log('fizz');
    }
    if (i % 5 === 0) {
      console.log('buzz');
    }
  }
}
