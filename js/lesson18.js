window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Таймер
  const countTimer = (deadline) => {
    let timerHours = document.querySelector("#timer-hours");
    let timerMinutes = document.querySelector("#timer-minutes");
    let timerSeconds = document.querySelector("#timer-seconds");
    // Двоеточия
    let timerNumbers = document.querySelector(".timer-numbers");

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
    let interval;
    const firstSecond = () => {
      let timer = getTimeRemaining();
      // Вывод значений на странцу
      timerHours.textContent = formatTime(timer.hours);
      timerMinutes.textContent = formatTime(timer.minutes);
      timerSeconds.textContent = formatTime(timer.seconds);

      if (timer.timeRemaining < 0) {
        clearInterval(interval);
        //Красный текст
        timerNumbers.style.color = "red";
        // Зануление счетчика
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
      }
    };
    // Единый вызов, в первую секунду
    firstSecond();

    interval = setInterval(firstSecond, 1000);
  };
  countTimer("27 april 2021");

  /* Этот метод макс показывал на интенсиве willberis, взял его сделал отдельной функцией
  вызываю его по клику на элементы меню и "следующий слайд" */
  // Скролл
  const scroll = (scrollLink) => {
    scrollLink.addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = document.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul > li > a");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    btnMenu.addEventListener("click", handlerMenu);
    closeBtn.addEventListener("click", handlerMenu);

    menuItems.forEach((elem) => {
      elem.addEventListener("click", handlerMenu);
      elem.addEventListener("click", scroll(elem));
    });
  };
  toggleMenu();

  // Попап окно
  const togglePopUp = () => {
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelectorAll(".popup-btn");
    const popUpClose = document.querySelector(".popup-close");

    // Анимация
    // Это моя анимация из прошлого урока переделанная под этот проект
    let count = 0;
    let modalAnimate = () => {
      let modalAnimateID = requestAnimationFrame(modalAnimate);
      if (count <= 50) {
        count++;
        popup.style.opacity = `${(count * 2) / 100}`;
      } else {
        cancelAnimationFrame(modalAnimateID);
      }
    };

    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
        const screenWidth = window.screen.width;
        if (screenWidth >= 768) {
          modalAnimate();
        }
      });
    });

    popUpClose.addEventListener("click", () => {
      count = 0;
      popup.style.display = "none";
    });
  };
  togglePopUp();

  // Перемещение на следующий слайд
  const nextSlide = () => {
    const slide = document.querySelector("main > a");
    slide.addEventListener("click", scroll(slide));
  };
  nextSlide();
});
