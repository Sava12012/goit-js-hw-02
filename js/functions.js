// =========== Work 1

// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// =========== Work 2

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//     return "Access denied, wrong password!"
//     console.log(checkPassword);
// }

// =========== Work 3

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";   
// }

// =========== Work 4

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits); 

// =========== Work 5

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// =========== Work 6

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// =========== Work 7

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruits.length)

// =========== Work 8

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElevtnt = fruits[lastElementIndex];

// console.log(fruits);
// console.log(fruits[lastElementIndex]);

// =========== Work 9

// function getExtremeElements(array) {

// return [array[0], array[array.length-1]];

// }

// =========== Work 10

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   let total = words.length;
//   return total * pricePerWord;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// =========== Work 11

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }

// =========== Work 12

// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }

// =========== Work 13

// function slugify(title) {

//   const slug = title.toLowerCase().split(" ").join('-');
//   return slug;

// }

// // =========== Work 14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// // =========== Work 15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// // =========== Work 16

// const start = 3;
// const end = 7;

// for (let i = start; i <=end ; i += 1) { // Change this line
//   console.log(i);
// }

// // =========== Work 18

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1){
//     total += i
//   }
//     return total;
// }

// console.log(calculateTotal(10))


// // =========== Work 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+= 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// =========== Work 20

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1 ) {
//     total = total + order[i];
    
//   }

//   return total;
// }

//  =========== Work 21

//  function findLongestWord(string) {
 
//   let stringSplit = string.split(' ');
//   let longesWord = ("");
//   for (let i = 0; i < stringSplit.length; i+= 1) {
//     if (stringSplit[i].length > longesWord.length) {
//       longesWord = stringSplit[i]; 
//     }
//   }
//   return longesWord;
// }

//  =========== Work 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i+= 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

//  =========== Work 23

// function filterArray(numbers, value) {
//   let newArr = []
//   for (let number of numbers) {
//     if (number > value) {
//       newArr.push(number)
//     }
//   }
//   return newArr

// }

//  =========== Work 24

