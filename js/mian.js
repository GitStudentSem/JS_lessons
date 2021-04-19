"use strict";
// Основная работа программы без классов и прототипов просто на функциях
function parametrs() {
  // получение полей и запись их значений в переменные
  // Для оптимизации можно все это записать в объект и с помощью цикла
  // очищать значения, но времени это реализовывать нет
  // поэтому всё написано руками
  let selector = document.getElementById("selector").value;
  let height = document.getElementById("height").value;
  let width = document.getElementById("width").value;
  let bg = document.getElementById("bg").value;
  let fontSize = document.getElementById("fontsize").value;

  function create() {
    //Если первый символ селектора это "." то создаею блок
    if (selector[0] === ".") {
      // Создание самого блока добавление класса и вывод на страницу
      let block = document.createElement("div");
      document.body.appendChild(block);
      block.className = selector;
      block.innerHTML = `Вы создали блок с классом ${selector}`;
      // стили для созданного блока
      // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
      block.style.cssText = `
      height: ${+height}px;
      width: ${+width}px;
      background-color: ${bg};
      font-size: ${+fontSize}px;
      display: inline-block;
      margin: 15px;
  `;
      // Очистка полей после создания блока
      document.getElementById("selector").value = "";
      document.getElementById("height").value = "";
      document.getElementById("width").value = "";
      document.getElementById("bg").value = "";
      document.getElementById("fontsize").value = "";
    } else if (selector[0] === "#") {
      // Создание самого блока добавление класса и вывод на страницу
      let block = document.createElement("p");
      document.body.appendChild(block);
      block.id = selector;
      block.innerHTML = `Вы создали параграф с id ${selector}`;
      // стили для созданного блока
      // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
      block.style.cssText = `
      height: ${+height}px;
      width: ${+width}px;
      background-color: ${bg};
      font-size: ${+fontSize}px;
      margin: 15px;
      display: inline-block;

  `;
      // Очистка полей после создания блока
      document.getElementById("selector").value = "";
      document.getElementById("height").value = "";
      document.getElementById("width").value = "";
      document.getElementById("bg").value = "";
      document.getElementById("fontsize").value = "";
    } else {
      // Очистка полей при ошибке (неправильное имя селектора)
      document.getElementById("selector").value = "";
      document.getElementById("height").value = "";
      document.getElementById("width").value = "";
      document.getElementById("bg").value = "";
      document.getElementById("fontsize").value = "";
      alert("Введите правильный селектор! (например .section или #text)");
    }
  }
  create();
}
let button = document.getElementById("button");
button.addEventListener("click", parametrs);
