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

// for (let i = 0; i < fruits.length; i+= 1) {
//   const fruit = fruits[i];
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

// // Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

//  =========== Work 26

// function calculateTotalPrice(order) {
//   let total = 0; 
//   

//   for (let i of order) {
//     total+= i;
//   }
//   return total;
// }

//  =========== Work 32

// function includes(array, value) {
//   
//   for (let item of array) {
//     if (item === value) {
//       return true
//     }
//   }
// return false
// }


//  ================================ Модуль 3 Обєкти

//  =========== Work 11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

//  =========== Work 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// 

// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb); 
// };


//  =========== Work 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

// for (const product of products) {
//   if (productName === product.name) {
//     return product.price;
//   }
// }
// return null;

// }


//  =========== Work 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {


// let prodValue = [];
//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       prodValue.push(product[propName]);
//     }
//   }
//   return prodValue;

// }


//  =========== Work 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//     total = (product.price * product.quantity);
//     }
//   }
//   return total;
//   }
  

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Blaster"));


//  =========== Work 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
//   const{yesterday:highYesterday,today:highToday,tomorrow:highTomorrow,icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


//  =========== Work 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };


// const {today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;

//  =========== Work 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// 
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//  =========== Work 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const potionIndex = this.potion.indexOf(potionName);
// this.potions.splice(potionIndex, 1);

//   },
// };

// atTheOldToad.removePotion("Speed potion");

//  =========== Work 41


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
// };
// ;
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotio;

// ==================== Тренування розпилювання масиву ===========================
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//     ...a,
//     x: 10,
//     ...b,
//     y: 20,
//     name: "Mango",
// }

// console.log(c);

// const a = { x: 100, y: 200, z: 500 };
// const b = { x: 300, y: 100, z: 600 };

// const c = {...b, x: 4000, ...a, x: 3000,};

// console.log(c);


