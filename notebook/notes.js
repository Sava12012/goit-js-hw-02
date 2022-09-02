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






                                // Модуль 3 - Обєкти {}

// =========== Перебираєм Обєкти 

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


// ==============================================...rest - оператор
