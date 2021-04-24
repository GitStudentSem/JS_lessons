window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //Таймер
  function countTimer(deadline) {
    let timerHours = document.querySelector("#timer-hours");
    let timerMinutes = document.querySelector("#timer-minutes");
    let timerSeconds = document.querySelector("#timer-seconds");
    // Двоеточия
    let colonFirst = document.querySelectorAll(".timer-numbers > span")[1];
    let colonSecond = document.querySelectorAll(".timer-numbers > span")[3];

    function getTimeRemaining() {
      // getTime переводит значения в милисекунды
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      // timeRemaining показывает сколько осталось времени
      let timeRemaining = (dateStop - dateNow) / 1000;
      // Показывает секунды, остаток от деления, что бы не выйти за пределы 60 секунд
      let seconds = Math.floor(timeRemaining % 60);
      // Показывает минуты, остаток от деления, что бы не выйти за пределы 60 минут
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let hours = Math.floor(timeRemaining / 60 / 60);
      return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
      let timer = getTimeRemaining();

      // Вывод значений на странцу
      function addZero() {
        if (timer.hours < 10) {
          timer.hours = "0" + timer.hours;
        }

        if (timer.minutes < 10) {
          timer.minutes = "0" + timer.minutes;
        }

        if (timer.seconds < 10) {
          timer.seconds = "0" + timer.seconds;
        }

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
      }
      addZero();

      // Переменная объявлена вне условия, что бы она было видна в блоке else
      let interval;
      if (timer.timeRemaining > 0) {
        interval = setInterval(updateClock, 1000);
      } else {
        clearInterval(interval);
        //Кросный текст
        timerHours.style.color = "red";
        timerMinutes.style.color = "red";
        timerSeconds.style.color = "red";
        // Красные двоеточия
        colonFirst.style.color = "red";
        colonSecond.style.color = "red";
        // Зануление счетчика
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    }
    updateClock();
  }
  countTimer("27 april 2021");
});
