/*
  1. Приклади з областями видимості
*/

// -------------------------------//

// let a = 10;

// if (true) {
//   const a = 5;
// }

// {
//   // const a = 5;
//   console.log(a);
// }

// console.log("in global", a);

// ------------------------------//
// const a = 10;

// if (true) {
//   let a = 5;
//   a = 15;
//   console.log("in local", a);
// }

// console.log("in global", a);

// ------------------------------//
// let a = 10;

// if (true) {
//   // let a = 100;
//   a = 1;
//   if (true) {

//     a = 15;
//   }
// }

// console.log("global", a);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }

// console.log(total);

/*
  2. Створення та види функцій
*/

// function declaretion

// getSum(5, 5);

// function getSum(number1, number2) {
//   console.log(number1 + number2);
// }

// getSum(5, 5);

// const sum = getSum(5, 7);
// // const sum1 = getSum(50, 7);
// // const sum2 = getSum(33, 7);
// // const sum3 = getSum(5, 7);

// console.log(sum);

// const text = prompt(`Write your name`);

// console.log(text);

// function expression
// викликається тільки після оголошення

// const getSum2 = function (number1, number2) {
//   console.log(number1 + number2);
// };

// getSum2(5, 10);
// getSum2(10, 5);

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

// const getSum = function () {
//   let sum = 0;

//   for (let number of arguments) {
//     sum += number;
//   }

//   return sum;
// };

// const sum = getSum(1, 2, 3, 4, 5, 6, 7);

// console.log(sum);

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");
//   console.log("end foo");
// }

// function boo() {
//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["javascript", "html", "python"];

// function addCourse(courseName) {
//   if (!courses.includes(courseName)) {
//     courses.push(courseName);
//   }
// }

// function removeCourse(courseName) {
//   const courseIndex = courses.indexOf(courseName);

//   courses.splice(courseIndex, 1);
// }

// function updateCourse(oldName, newName) {
//   const oldCourseIndex = courses.indexOf(oldName);

//   courses.splice(oldCourseIndex, 1, newName);
// }

// removeCourse("html");

// updateCourse("html", "fullstack developer");

// addCourse("project manager");
// addCourse("python");

// console.log(courses);

// -------

// function includes(array, value) {
//   for (let item of array) {
//     if (item === value) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));

// let a = 5;

// {
//   // const a = 15;
//   {
//     const a = 10;
//   }
// }

// console.log(a);
