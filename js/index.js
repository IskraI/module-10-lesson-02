/*
  1. Основи подій. Створення та видалення слухачів

  Опис та передача колбеків інлайново та як окремі функції, різниця

  Найменування колбеків для слухачів:
  - handle*: handleSubjectEvent
  - *Handler: subjectEventHandler
  - on*: onSubjectEvent

  show the correct one)

  Реалізувати функціонал підміни зображення при кліці на кнопку
  та прибирання слухача події при кліці на іншу
*/

// https://picsum.photos/200/300

// const imgEl = document.querySelector('.js-img');

// const handleImgClick = () => {
//   console.log(`Hi!`);
// };

// imgEl.addEventListener('click', handleImgClick);

// imgEl.removeEventListener('click', handleImgClick);

// console.log((() => {}) === (() => {}));

// imgEl.addEventListener('click', () => {
//   console.log(`Hello!`);
// });

// imgEl.addEventListener('mousemove', () => {
//   console.log(`Mouse!`);
// });

const imgEl = document.querySelector('.js-img');

const swapBtnEl = document.querySelector('.js-swap-btn');

const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const handleSwapImg = () => {
  imgEl.src = 'https://picsum.photos/200/300';
};

swapBtnEl.addEventListener('click', handleSwapImg);

removeListenerBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', handleSwapImg);
});
