'use strict';

/*
 * Проміси
 */

//? конструктор new Promise(callback(resolve, reject));

// const promise = new Promise((resolve, reject) => {
//   const isDone = Math.random();

//   setTimeout(() => {
//     if (isDone > 0.5) {
//       console.log('Проміс виконався успішно');

//       resolve('Done');
//     }

//     console.log('Проміс виконався неуспішно');
//     reject('Error');
//   }, 500);
// });

// console.log(promise);

// const arr = [1, 2, 3];

// console.log(arr);

// arr.push(5);

//? then(onSuccess, onError)

// promise.then(data => {
//   console.log(data);
// });

//? ланцюжок промісів та catch(onError)

// promise.catch(error => {
//   console.log(error);
// });

// promise
//   .then(data1 => {
//     console.log(data1);

//     return data1 + '!';
//   })
//   .then(data2 => {
//     console.log(data2);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Finally!');
//   });

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   console.log(`ss`);
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//? TASK 03
// Що буде у консолі

const promise = new Promise((resolve, reject) => {
  reject('error');
});

promise
  .then(data => {
    console.log(data);
  })
  .then(data => {
    console.log(data);
    return '2';
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
