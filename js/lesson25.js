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
  countTimer("1 may 2021");

  /* Этот метод макс показывал на интенсиве willberis, взял его сделал отдельной функцией
  вызываю его по клику на элементы меню и "следующий слайд" */
  // Скролл
  const scroll = (scrollLink) => {
    // scrollLink.preventDefault();
    const id = scrollLink.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Меню
  const toggleMenu = () => {
    const menu = document.querySelector("menu");
    const menuItems = menu.querySelectorAll("ul > li > a");
    const body = document.querySelector("body");

    const openMenu = () => {
      menu.classList.add("active-menu");
    };
    const closeMenu = () => {
      menu.classList.remove("active-menu");
    };

    body.addEventListener("click", (event) => {
      let target = event.target;

      // Блокировка слушателя на всем body
      if (
        !target.closest(".menu, .close-btn") &&
        !target.matches("menu a") &&
        target.closest(".active-menu")
      ) {
        return;
      }

      // Открыть меню
      if (target.closest(".menu")) {
        openMenu();
        // Нажатие на крестик
      } else if (target.closest(".close-btn")) {
        closeMenu();
        // Нажатие вне меню
      } else if (!target.closest(".active-menu")) {
        closeMenu();
        // Нажатие на пункт меню
      } else if (target.matches("menu a")) {
        event.preventDefault();
        closeMenu();
        scroll(target);
      }
    });
  };
  toggleMenu();

  // Попап окно
  const togglePopUp = () => {
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelectorAll(".popup-btn");

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

    // Открытие модального окна
    popupBtn.forEach((elem) => {
      elem.addEventListener("click", () => {
        popup.style.display = "block";
        const screenWidth = window.screen.width;
        if (screenWidth >= 768) {
          modalAnimate();
        }
      });
    });

    // Закрытие по оверлэю
    popup.addEventListener("click", (event) => {
      let target = event.target;
      // Закрытие по крестику
      if (target.classList.contains("popup-close")) {
        count = 0;
        popup.style.display = "none";
      } else {
        target = target.closest(".popup-content");

        if (!target) {
          count = 0;
          popup.style.display = "none";
        }
      }
    });
  };
  togglePopUp();

  // Перемещение на следующий слайд
  const nextSlide = () => {
    const slide = document.querySelector("main > a");
    slide.addEventListener("click", (event) => {
      event.preventDefault();
      scroll(slide);
    });
  };
  nextSlide();

  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector(".service-header");
    const tab = tabHeader.querySelectorAll(".service-header-tab");
    const tabContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add("active");
          tabContent[i].classList.remove("d-none");
        } else {
          tab[i].classList.remove("active");
          tabContent[i].classList.add("d-none");
        }
      }
    };

    tabHeader.addEventListener("click", (event) => {
      let target = event.target;
      target = target.closest(".service-header-tab");

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  // Слайдер
  const slider = () => {
    const slider = document.querySelector(".portfolio-content");
    const slide = document.querySelectorAll(".portfolio-item");
    const dots = document.querySelector(".portfolio-dots");
    const slidesImg = document.querySelectorAll(
      ".portfolio > .container > ul > .portfolio-item"
    );
    // Генерация точек
    const createDot = () => {
      // Цикл на количество слайдов
      slidesImg.forEach(() => {
        let dotCreate = document.createElement("li");
        dotCreate.className = "dot";
        dots.appendChild(dotCreate);
      });
      // let dot в этой области видимости локальна, определяю её что бы первой точке
      // Задать активный слот далее по коду, эта переменная глобальна
      // для функции slider() и от нее происходят расчеты
      let dot = document.querySelectorAll(".dot");
      dot[0].classList.add("dot-active");
    };
    createDot();
    // Поиск точек перенес после их генерации
    const dot = document.querySelectorAll(".dot");

    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    };
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches(".portfolio-btn, .dot")) {
        return;
      }
      prevSlide(slide, currentSlide, "portfolio-item-active");
      prevSlide(dot, currentSlide, "dot-active");

      if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      } else if (target.matches(".dot")) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, "portfolio-item-active");
      nextSlide(dot, currentSlide, "dot-active");
    });

    slider.addEventListener("mouseover", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        stopSlide();
      }
    });
    slider.addEventListener("mouseout", (event) => {
      if (
        event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
      ) {
        startSlide();
      }
    });

    startSlide(1500);
  };
  slider(0);

  // Подмена фото при наведении
  const photoHover = () => {
    const photos = document.querySelectorAll(".command__photo");
    photos.forEach((item) => {
      const changeImg = () => {
        // Сохранение значений src и data в переменные
        const src = item.src;
        const data = item.dataset.img;
        // Замена одного значения на другое
        item.src = data;
        item.dataset.img = src;
      };
      // Вызов функции при разных событиях
      item.addEventListener("mouseenter", changeImg);
      item.addEventListener("mouseleave", changeImg);
    });
  };
  photoHover();

  // Валидация контактных данных
  const validateContact = (name, email, phone) => {
    name.addEventListener("input", () => {
      // [^а-яё\-\s] Обрезает все символы кроме русских букв тире и пробел
      name.value = name.value.replace(/[^а-яё-\s]/gi, "");
    });
    name.addEventListener("blur", () => {
      // Заменяет 2 и более тире на один
      name.value = name.value.replace(/-{1,}/g, "-");
      // Заменяет 2 и более пробела на один
      name.value = name.value.replace(/\s{1,}/gi, " ");
      // Удаляет пробелы и тире в начале и конце строки
      name.value = name.value.replace(/^\s|\s$|^-|-$/g, "");
      // первая буква большая, остальные маленькие
      // ЗАщита от пустой строки, что бы консоль не ругалась
      if (name.value !== "") {
        // Массив для хранения отдельных слов
        let nameFirstBig = [];
        // Бью строку по пробелу и создаю массив из слов
        let word = name.value.split(" ");
        word.forEach((item) => {
          // Каждый элемент массива привожу к большой букве
          item = item[0].toUpperCase() + item.slice(1);
          // отправляю элементы в пустой массив на хранение
          nameFirstBig.push(item);
        });
        // Делаю из массива строку и отправляю её в значение поля инпут
        name.value = nameFirstBig.join(" ");
      }
    });

    email.addEventListener("input", () => {
      // let space = email.value;
      // email.value = "a";
      // email.value = space;
      // [^a-z@-_.!~*'] Обрезает все символы кроме указанных
      // email.value = email.value.replace(/[^\w@.]/g, "");
      email.value = email.value.replace(/[^a-z@\-_.!~'*]/g, "");
    });

    email.addEventListener("blur", () => {
      // Обрезает 2 и более тире
      email.value = email.value.replace(/-{1,}/g, "-");
      // Удаляет тире в начале и конце строки
      email.value = email.value.replace(/^-|-$/g, "");
    });

    phone.addEventListener("input", () => {
      // [^0-9] Обрезает все символы кроме цифр
      phone.value = phone.value.replace(/[^0-9()-]/g, "");
    });

    phone.addEventListener("blur", () => {
      // Обрезает 2 и более тире
      phone.value = phone.value.replace(/-{1,}/g, "-");
      // Удаляет тире в начале и конце строки
      phone.value = phone.value.replace(/^-|-$/g, "");
    });
  };

  // Валидация данных на главном экране
  const mainForm = () => {
    const name = document.getElementById("form1-name");
    const email = document.getElementById("form1-email");
    const phone = document.getElementById("form1-phone");
    validateContact(name, email, phone);
  };
  mainForm();

  // Валидация попап окна
  const popupForm = () => {
    const name = document.getElementById("form3-name");
    const email = document.getElementById("form3-email");
    const phone = document.getElementById("form3-phone");
    validateContact(name, email, phone);
  };
  popupForm();

  // Валидация калькулятора
  const calculatorForm = () => {
    let inputs = document.querySelectorAll(".calc-block > input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        // [^0-9] Обрезает все символы кроме цифр
        // ^ это отрицание т.е. будет обрезано всё что не цифра
        input.value = input.value.replace(/[^0-9]/g, "");
      });
    });
  };
  calculatorForm();

  //Валидация формы в подвале
  const footerForm = () => {
    const name = document.getElementById("form2-name");
    const email = document.getElementById("form2-email");
    const phone = document.getElementById("form2-phone");
    const message = document.getElementById("form2-message");

    validateContact(name, email, phone);

    message.addEventListener("input", () => {
      message.value = message.value.replace(/[^а-яё-\s]/gi, "");
    });
  };
  footerForm();

  // Калькулятор
  const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcDay = document.querySelector(".calc-day");
    const calcCount = document.querySelector(".calc-count");
    const totalValue = document.getElementById("total");

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      // Плавный счетчик расчет анимации
      const animate = ({ timing, draw, duration }) => {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) {
            timeFraction = 1;
          }
          let progress = timing(timeFraction);
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
      };

      // Вызов анимации с параметрами
      const counter = () => {
        totalValue.textContent = 0;
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            totalValue.textContent = Math.floor(total * progress);
          },
        });
      };
      counter();
    };

    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      if (
        target === calcType ||
        target === calcSquare ||
        target === calcDay ||
        target === calcCount
      ) {
        countSum();
      }
    });
  };
  calc(100);

  // Отправка формы через аякс
  const sendForm = () => {
    const errorMessage = "Что-то пошло не так...";
    const loadMessage = "Загрузка...";
    const successMessage = "Спасибо! Мы с вами свяжемся!";

    const form = document.getElementById("form1");

    const statusMessage = document.createElement("div");
    statusMessage.style.cssText = "font-size: 2rem;";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);

      const request = new XMLHttpRequest();
      request.open("POST", "./server.php");
      request.setRequestHeader("Content-Type", "multipart/form-data");
      const formData = new FormData(form);
      request.send(formData);
    });
  };
  sendForm();
});
