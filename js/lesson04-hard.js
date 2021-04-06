"use strict";

function interString(string) {
  if (typeof string !== "string") {
    alert("введите строку!");
    // снова вызывает функцию, что бы ввести строку без обновления страницы
    interString(prompt("Введите строку: "));
  }
  string = string.trim();
  console.log("string: ", string);

  if (string.length >= 30) {
    //substr выводит в консоль элементы с [0] и длиною 30, после канкатенирует с ...
    string = string.substr(0, 30) + "...";
    console.log(string);
  }
}
// При необходимости метод prompt можно убрать и занести данные в переменную с любым типом
interString(prompt("Введите строку: "));
