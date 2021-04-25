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
    block.style.transform = `scale(${1 + count / 100}) rotate(${count / 2}deg)`;
    block.style.width = `${count / 5}px`;
    block.style.height = `${count / 5}px`;
  } else if (count <= 450) {
    block.style.transform = `scale(${1 + count / 100}) rotate(${count / 2}deg)`;
    block.style.width = `${count / 5}px`;
    block.style.height = `${count / 5}px`;
  } else {
    cancelAnimationFrame(flyInterval);
  }
};
let animate = true;
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
  if (animate) {
    count = 0;
    cancelAnimationFrame(flyInterval);
    animate = true;
    block.style.backgroundColor = `rgb(${count}, ${count}, ${count})`;
    block.style.transform = `scale(${count}) rotate(${count}deg)`;
    block.style.width = `${count}px`;
    block.style.height = `${count}px`;
  } else {
    count = 0;
    cancelAnimationFrame(flyInterval);
    animate = true;
    block.style.backgroundColor = `rgb(${count}, ${count}, ${count})`;
    block.style.transform = `scale(${count}) rotate(${count}deg)`;
    block.style.width = `${count}px`;
    block.style.height = `${count}px`;
  }
});
