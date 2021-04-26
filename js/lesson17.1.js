"use strict";

const calculator = {
  sum: function () {
    let first = +document.querySelector("#a").value;
    let second = +document.querySelector("#b").value;
    document.querySelector("#res").value = first + second;
  },
  mult: function () {
    let first = +document.querySelector("#a").value;
    let second = +document.querySelector("#b").value;
    document.querySelector("#res").value = first * second;
  },
  show: function () {
    let goSum = document.querySelector("#sum");
    let goMult = document.querySelector("#mult");
    goSum.addEventListener("click", this.sum);
    goMult.addEventListener("click", this.mult);
  },
};
calculator.show();
