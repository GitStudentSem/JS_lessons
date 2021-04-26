"use strict";
function getResult(x, y) {
  let result = 0;
  let mult = x ** y;

  while (mult > 0) {
    result += mult % 10;
    mult = Math.floor(mult / 10);
  }

  return result;
}

console.log(getResult(4, 8));
