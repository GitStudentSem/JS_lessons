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
  let cityes;
  if (country.value === "rus") {
    cityes = cityArr[country.value];

    city.innerHTML += `<select>`;

    cityes.forEach((cityRus) => {
      city.innerHTML += `
      <option value="rus">${cityRus}</option>`;
    });

    city.innerHTML += `</select>`;
  } else if (country.value === "uk") {
    cityes = cityArr[country.value];

    city.innerHTML += `<select>`;

    cityes.forEach((cityUk) => {
      city.innerHTML += `
      <option value="rus">${cityUk}</option>`;
    });

    city.innerHTML += `</select>`;
  } else if (country.value === "bel") {
    cityes = cityArr[country.value];

    city.innerHTML += `<select>`;

    cityes.forEach((cityBel) => {
      city.innerHTML += `
      <option value="rus">${cityBel}</option>`;
    });

    city.innerHTML += `</select>`;
  } else if (country.value === "jap") {
    cityes = cityArr[country.value];

    city.innerHTML += `<select>`;

    cityes.forEach((cityJap) => {
      city.innerHTML += `
      <option value="rus">${cityJap}</option>`;
    });

    city.innerHTML += `</select>`;
  }
});

// console.log(spisok);
