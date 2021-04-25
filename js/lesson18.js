window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Таймер
  const countTimer = (deadline) => {
    let timerHours = document.querySelector("#timer-hours");
    let timerMinutes = document.querySelector("#timer-minutes");
    let timerSeconds = document.querySelector("#timer-seconds");
    // Двоеточия
    let colonFirst = document.querySelectorAll(".timer-numbers > span")[1];
    let colonSecond = document.querySelectorAll(".timer-numbers > span")[3];

    const getTimeRemaining = () => {
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
    };

    // Добавление 0 к одной цифре
    const formatTime = (time) => {
      if (time < 10) {
        return "0" + time;
      } else {
        return time;
      }
    };

    // Время для первой секунды, одноразовая отрисока значений
    const firstSecond = () => {
      let timer = getTimeRemaining();
      // Вывод значений на странцу;
      timerHours.textContent = formatTime(timer.hours);
      timerMinutes.textContent = formatTime(timer.minutes);
      timerSeconds.textContent = formatTime(timer.seconds);
    };
    firstSecond();

    let interval = setInterval(() => {
      let timer = getTimeRemaining();
      // Вывод значений на странцу
      timerHours.textContent = formatTime(timer.hours);
      timerMinutes.textContent = formatTime(timer.minutes);
      timerSeconds.textContent = formatTime(timer.seconds);

      if (timer.timeRemaining < 0) {
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
    }, 1000);
  };
  countTimer("27 april 2021");

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = document.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul > li");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    btnMenu.addEventListener("click", handlerMenu);

    closeBtn.addEventListener("click", handlerMenu);

    menuItems.forEach((elem) => {
      elem.addEventListener("click", handlerMenu);
    });
  };
  toggleMenu();
});
