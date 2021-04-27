"use strict";
// const cityArr = {
//     rus: [
//       "Москва",
//       "Санк-Петербург",
//       "Новосибирск",
//       "Екатеринбург",
//       "Нижний Новгород",
//       "Казань",
//       "Челябинск",
//     ],
//     uk: ["Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Запорожье", "Львов"],
//     bel: ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест"],
//     jap: ["Токио", "Киото", "Осака", "Иокогама"],
//   },
//   countryArr = { rus: "Россия", uk: "Украина", bel: "Беларусь", jap: "Япония" },
//   countrySelect = document.querySelector("#country"),
//   citySelect = document.querySelector("#city"),
//   resultPlace = document.querySelector(".result");

// countrySelect.addEventListener("input", () => {
//   bildSitySelect(cityArr[countrySelect.value]);
// });

// const bildSitySelect = (sityList = cityArr.rus) => {
//   // значение по умолчанию т.к. я вызываю функцию еще до выбора пользователя
//   [...citySelect].forEach((option) => option.remove());

//   //очистка select перед рендером новых значений. Оператор spead позволяет использовать forEach удля элемента citySelect

//   sityList.forEach((sityName) => {
//     let option = document.createElement("option");
//     option.value, (option.textContent = sityName);
//     citySelect.prepend(option);
//   });
// };

// citySelect.addEventListener("click", () => {
//   resultPlace.textContent = `${countryArr[countrySelect.value]}, ${
//     citySelect.value
//   }`;
// });

// bildSitySelect();
////////////////////////
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

const start = function (cityes = cityArr.rus) {
  cityes = cityArr[country.value];
  let countrys = coutryArr[country.value];

  // Удаление
  while (city.firstChild) {
    city.removeChild(city.firstChild);
  }

  // Добавление
  cityes.forEach((elem) => {
    let option = document.createElement("option");
    option.setAttribute("value", elem);
    option.textContent = elem;
    city.prepend(option);
  });

  //Вывод на страницу
  city.addEventListener("input", () => {
    result.innerHTML = `${countrys}, ${city.value}`;
  });
};
start();

country.addEventListener("input", start);
