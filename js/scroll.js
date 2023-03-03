'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const handleDocumentScroll = () => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 300) {
    const activeSectionEl = document.querySelector(`.animated-section`);

    activeSectionEl.classList.add(`active`);
  }
};

const throttledHandler = _.throttle(handleDocumentScroll, 700);

document.addEventListener(`scroll`, throttledHandler);
