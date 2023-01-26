/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія массива

// const array = [1, 2, 3, 4, 5];

// const newArray = array.concat()

// const newArray = [...array];

// console.log(newArray);

// console.log(array === newArray);

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4];

// const array2 = [5, 6, 7, 8];

// const allElementsArray = array1.concat(array2);

// const allElementsArray = [...array1, 60, ...array2, 40];

// console.log(allElementsArray);

/*
  2. Копія об'єкту
*/

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const newUser = { ...user };

// console.log(newUser);

// console.log(newUser === user);

/*
  3. Spread + Rest

  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

// function getMinNumber(...numbers) {
//   // console.log(arguments);
//   // console.log(number1, numbers);

//   return Math.min(...numbers);
// }

// console.log(getMinNumber(10, 50, 40, -5));

/*
  4. Деструктуризація об'єктів, які проблеми вирішує
*/

/*
  Напишіть деструктуризуюче присвоювання, яке:
  властивість firstName присвоїть у змінну firstName
  властивість age присвої присвоїть у змінну userAge
  властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
  якщо, у об'єкта данної властивості не буде)
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
//   hobbies: ['guitar', 'programming'],
//   gender: 'male',
//   weight: 70,
//   heigth: 180,
// };

// const { firstName, lastName, age: userAge, hobbies = [], ...otherProps } = user;

// console.log(userAge, hobbies);

// console.log(otherProps);

// user.firstName
// user.lastName
// user.age

/*
  5. Глубока деструктуризація об'єктів, дістати також original та secondary
*/

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   flag,
//   number,
//   employees,
//   langs: { original, secondary },
// } = team;

/*
  6. Деструктуризація масивів
*/

/*
  Дістати перший та третій елементи масиву, всі інші після 
  третього занести в окремий масив
*/

// const names = [
//   'Herbert Todd',
//   'Belle Soto',
//   'Roger Marsh',
//   'Ethan Lindsey',
//   'Olga Petrenko',
// ];

// const [first, , third, ...otherNames] = names;

// console.log(first, third);

// console.log(otherNames);

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34, 0.5];

// const [red, green, blue, alpha = 1] = rgb;

// console.log(rgb);

// console.log(...rgb);

/*
  У нас є об'єкт salaries з зарплатами

  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника

  Якщо об'єкт salaries пустий то повернути null

  Якщо декілька людей з одною тою самою зарплатою є найбільш високоплачуваними, можна 
  повернути будь-якого з них
 
  Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   const entries = Object.entries(salaries);

//   // console.log(entries);

//   let topSalary = 0;

//   let topPaidEmployee = null;

//   for (let [name, salary] of entries) {
//     if (salary > topSalary) {
//       topSalary = salary;
//       topPaidEmployee = name;
//     }
//   }

//   return topPaidEmployee;
// }

// console.log(topSalary(salaries));

// function sayHi(name, age, heigth) {
//   console.log(`Hi, ${name}! Your age is ${age}, your heigth is ${heigth}`);
// }

// sayHi(30, 'Andrii', 180);

// function sayHi({ name, age, heigth } = {}) {
//   console.log(`Hi, ${name}! Your age is ${age}, your heigth is ${heigth}`);
// }

// function sayHi(user) {
//   const { name, age, heigth } = user;

//   console.log(`Hi, ${name}! Your age is ${age}, your heigth is ${heigth}`);
// }

// sayHi();

// const user = { name: `Andrii` };

// const user2 = { ...user };
