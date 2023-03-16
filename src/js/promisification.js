'use strict';
// https://api.github.com/users/GoItTutor

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });

//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });
//   });
// }

// myAsyncFunction('https://api.github.com/users/GoItTutor')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);

//? Запит за користувачем на колбэках
// const fetchUserByName = (name, resolve, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.error(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах

// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер...');

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone < 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject("Користувача з таким ім'ям не знайдено");
//       }
//     }, 2000);
//   });

//   return promise;
// };

// fetchUserByName(`Andrii`).then(console.log).catch(console.log);

// const isSuccess = Math.random() > 0.5;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 500);
// });

// promise
//   .then(value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value);
//   })
//   .catch(console.log);

//   i - 0

// 1500

// 500

//   firstDelay + delayStep * i

// const arr = [1, 2, 3];

// const consoleLog = (el, index) => {
//   console.log(el, index);
// };

// arr.forEach(el => {
//   console.log(el);
// });

const forEach = (callback, array) => {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index], index, array);
  }
};

const map = (callback, array) => {
  const resultArr = [];

  for (let index = 0; index < array.length; index += 1) {
    resultArr.push(callback(array[index], index, array));
  }

  return resultArr;
};
