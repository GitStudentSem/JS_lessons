"use strict";
let print1 = function () {
  console.log("Крот");
};
let print2 = function () {
  console.log("овце,");
};
let print3 = function () {
  console.log("жирафу,");
};
let print4 = function () {
  console.log("зайке");
};
let print5 = function () {
  console.log("голубые");
};
let print6 = function () {
  console.log("сшил");
};
let print7 = function () {
  console.log("фуфайки");
};

let func1 = function () {
  // console.log("1");
  print3();
};

let func2 = function () {
  func1();

  setTimeout(function () {
    // console.log("2");
    print6();
  }, 1000);
};

let func3 = function () {
  setTimeout(function () {
    func2();
    // console.log("3");
    print4();
  }, 250);

  // console.log("4");
  print2();
};

setTimeout(function () {
  // console.log("5");
  print5();

  setTimeout(function () {
    // console.log("6");
    print7();
  }, 750);
}, 500);

print1();
// console.log("7");

func3();
