"use strict";
let text = document.getElementById("input-text");
let input = document.getElementById("input");

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};

let onChange = function (e) {
  let innerText = e.target.value;
  text.textContent = innerText;
};

onChange = debounce(onChange, 300);

input.addEventListener("keyup", onChange);
