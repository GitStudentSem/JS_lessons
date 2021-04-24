window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  function infoOfDay(newYear) {
    const hello = document.createElement("div");
    const dayOfWeek = document.createElement("div");
    const timerDay = document.createElement("div");
    const timeClock = document.createElement("div");
    document.body.append(hello);
    document.body.append(dayOfWeek);
    document.body.append(timerDay);
    document.body.append(timeClock);

    let days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    let dateStop = new Date(newYear).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let day = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = new Date().getHours();

    if (0 <= hours && hours <= 5) {
      hello.textContent = "Доброй ночи";
    } else if (6 <= hours && hours <= 11) {
      hello.textContent = "Доброе утро";
    } else if (12 <= hours && hours <= 16) {
      hello.textContent = "Добрый день";
    } else if (17 <= hours && hours <= 23) {
      hello.textContent = "Добрый вечер";
    }

    let weekDay = new Date().getDay();
    dayOfWeek.textContent = `Сегодня: ${days[weekDay]}`;

    timerDay.textContent = `До нового года осталось ${day} дней`;

    function digitalClock() {
      let date = new Date();
      let time = date.toLocaleTimeString("en");
      // Весь этот код заменён одной строкой выше
      // let hoursNow = date.getHours();
      // let minutesNow = date.getMinutes();
      // let secondsNow = date.getSeconds();

      // if (hoursNow < 10) {
      //   hoursNow = "0" + hoursNow;
      // }
      // if (minutesNow < 10) {
      //   minutesNow = "0" + minutesNow;
      // }
      // if (secondsNow < 10) {
      //   secondsNow = "0" + secondsNow;
      // }
      timeClock.innerHTML = `Текущее время: ${time}`;
      setTimeout(digitalClock, 1000);
    }
    digitalClock();
  }
  infoOfDay("1 january 2022");
});
