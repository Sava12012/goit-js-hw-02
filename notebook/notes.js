//===============================Модуль 2 - Масиви Функції []
// =========== Перевірка на масив: 
// let friends = ['vova', 'bob', 'anna', 'dima', 'nata']
// console.log(friends)

// let nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(Array.isArray(nums));


// =========== Пошук по масиву: [].indexOf()

// let friends = ['vova', 'bob', 'anna', 'dima']
// let result = friends.indexOf('dima');
// console.log(result);


// =========== Додає в кінець 1 або декілька елементів: [].push();

// friends.push("sveta", 200, "lena");
// console.log(friends);

// =========== Видалити з масиву: [].splice()

// friends.splice(1);
// friends.splice(1, 1);
// friends.splice(1, 1, "pizza");
// console.log(friends)

// =========== Видалити з масиву: [].slice()

// 1 Зробити копію масиву:
// const nums = [10, 20, 30, 40];
// console.log(nums);
// const nums_2 = nums.slice();
// console.log(nums_2)

// 2 Ріжем самив за допомогою.slice

// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log(nums);

// // let nums_2 = nums.slice(1);
// let nums_2 = nums.slice(-2);
// console.log(nums_2);

// =========== Склеювання масивів: [].concat()

// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// const resultArr = friends.concat(nums);
// console.log(resultArr)

// копія масиву:
// const friends = ['vova', 'bob', 'anna', 'dima', 'nata']
// const nums = [10, 20, 30, 40, 50, 60, 70, 80];
// const resultArr = nums.concat();
// console.log(resultArr === nums);

// =========== Перетворення строку в масив: [].split('')

// let str = "abcdef"
// let res = str.split("");
// console.log(Array.isArray(res));

// =========== Перевернення масиву в іншу сторону:

// const str = "abcdef"
// const res = str.split("").reverse().join("");
// console.log(res);

// =========== Перебираєм масиви:  метод for();

// const friends = ['bober', 'anaconda', 'pizza', 'apple']
// const allfriends = friends.length;
// for (let i = 0; i < allfriends; i += 1) {
//     console.log(friends[i]);
//     console.log(i, friends[i].length);
// }

// =========== Перебираєм масиви:  метод for of() ;

// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки. 
// Тіло циклу буде виконуватися для значення кожного елемента.
// Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

                                // Модуль 3 - Обєкти {}

// = { } - літерал обєкта


// ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);



// ================================= Перебираєм Обєкти 

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// Краще не використовувати for in бо він перебирирає не тільки свої свойстав обєкта а і унаслідовані.
// Не використовуєм for in, а замість того for Of
// Для цього користуємось конструктором object який має метод:‹

// // Object.keys(feedback);  - повертає масив ключів
// // Object.values(feedback); - повертає масив значень

// const keys = Object.keys(feedback);
// console.log(keys);

// // В подальшоу перебираємо через for of

//     for (const key of kays) {
//         console.log(key);
//         console.log(feedback[key]);

//         totalFeedback += feedback[key];
//     }

// console.log("totalFeedback:", totalFeedback);


// =====================================...rest - оператор


// rest: збирання всіх аргументів функції
// Операція ... (rest) дозволяє зібрати групу незалежних елементів у нову колекцію.
// Синтаксично - це близнюк операції розподілу, але відрізнити їх просто - розподіл - коли ... знаходиться у правій частині 
// операції присвоювання, а збирання - коли ... знаходиться в її лівій частині.

// =====================================
