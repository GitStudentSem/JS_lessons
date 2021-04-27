"use strict";
const cityArr = {
  rus: [
    "Москва",
    "Санк-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Нижний Новгород",
    "Казань",
    "Челябинск",
  ],
  uk: ["Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Запорожье", "Львов"],
  bel: ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест"],
  jap: ["Токио", "Киото", "Осака", "Иокогама"],
};
const coutryArr = {
  rus: "Россия",
  uk: "Украина",
  bel: "Беларусь",
  jap: "Япония",
};
let country = document.querySelector("#country");
let city = document.querySelector("#city");
let result = document.querySelector(".result");

const start = (cityes = cityArr.rus) => {
  cityes = cityArr[country.value];
  let countrys = coutryArr[country.value];

  remove();
  add(cityes);
  inner(countrys);
};

const remove = () => {
  // Удаление
  while (city.firstChild) {
    city.removeChild(city.firstChild);
  }
};

const add = (cityes) => {
  // Добавление
  cityes.forEach((elem) => {
    let option = document.createElement("option");
    option.setAttribute("value", elem);
    option.textContent = elem;
    city.prepend(option);
  });
};

const inner = (countrys) => {
  //Вывод на страницу
  city.addEventListener("input", () => {
    result.innerHTML = `${countrys}, ${city.value}`;
  });
};

start();

country.addEventListener("input", start);
