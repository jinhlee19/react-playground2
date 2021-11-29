var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//// map이라는 function 내부에 새로운 function을 요구하는 형태
function double(x) {
  return x * 2;
}

//// map #2
const newNumbers = numbers.map(function (x) {
  return x * 2;
});

//// foreach #1
var newNumbers = [];
function double(x) {
  newNumbers.push(x * 2);
}
numbers.forEach(double);

//// forEach #2
var newNumbers = [];
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});

//Filter - Create a new array by keeping the items that return true.

//// 필터 적용
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});

//// 필터 대신 for each 문으로
var newNumbers = [];
numbers.forEach(function (num) {
  if (num < 10) {
    newNumbers.push(num);
  }
});

//Reduce - Accumulate a value by doing something to each item in an array.

//// forEach문으로 numbers.를 통해서 loop through array로
//// 현재숫자를 하나씩 잡아서 new number에 추가해줌.

var newNumbers = 0;
numbers.forEach(function (currentNumber) {
  newNumbers += currentNumber;
});

//// Reduce Function의 사용
var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);

  return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
//// 가장 먼저 찾아지는 숫자를 잡고 끝.
const newNumbers = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.
////
const newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumbers);

//// emojipedia practice

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);