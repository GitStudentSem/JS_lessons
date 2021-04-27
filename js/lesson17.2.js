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

let country = document.querySelector("#country");
let city = document.querySelector("#city");
let result = document.querySelector(".result");
country.addEventListener("input", function () {
  let cityes = cityArr[country.value];
  city.innerHTML += `<select>`;

  cityes.forEach((elem) => {
    city.innerHTML += `
    <option value="${cityArr[country.value]}">${elem}</option>`;
  });
  city.innerHTML += `</select>`;
});
