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

export default countTimer;
