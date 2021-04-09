"use strict";

function hideNumber() {
  let secretNumber = 38; // замкнуто секретное число
  // создается переменная с вводом числа

  // рекурсия
  return function checkingIsNumber() {
    let interNumber = prompt("Угадай число от 1 до 100");
    // скорее всего эта надпись не смениься
    // если введенное число - не число ввести снова
    if (isNaN(parseFloat(interNumber))) {
      alert("Введи число!");
      checkingIsNumber();
    } else {
      // если введено число, то проверяем его на больше/меньше/равно
      if (interNumber !== null) {
        // проверка на отмену
        if (interNumber > secretNumber) {
          alert("Загаданное число меньше");
          checkingIsNumber();
        } else if (interNumber < secretNumber) {
          alert("Загаданное число больше");
          checkingIsNumber();
        } else {
          alert("Поздравляю, Вы угадали!!!");
        }
      }
    }
  };
}

let play = hideNumber(); // check это функция checkingIsNumber
play();
