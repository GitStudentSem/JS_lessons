"use strict";
let block = document.querySelector(".block");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let count = 0;
let flyInterval;

let flyAnimate = function () {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if (count <= 255) {
    block.style.backgroundColor = `rgb(${count / 100}, ${count}, ${count})`;
    block.style.transform = `scale(${1 + count / 100}) rotate(${
      count / 10
    }deg)`;
    block.style.width = `${count / 5}px`;
    block.style.height = `${count / 5}px`;
  } else if (count <= 450) {
    block.style.transform = `scale(${1 + count / 100}) rotate(${
      count / 10
    }deg)`;
  } else {
    cancelAnimationFrame(flyInterval);
  }
};
let animate = false;
pause.addEventListener("click", function () {
  if (animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  }
});
reset.addEventListener("click", function () {
  if (!animate) {
    count = 0;
    cancelAnimationFrame(flyInterval);
    animate = true;
    block.style.backgroundColor = `rgb(${count / 100}, ${count}, ${count})`;
    block.style.transform = `scale(${1 + count / 100}) rotate(${
      count / 10
    }deg)`;
    block.style.width = `${count / 5}px`;
    block.style.height = `${count / 5}px`;
  }
});
