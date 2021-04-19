"use strict";
//Класс
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.create = function () {
    // Сюда приходит строка, но почему-то
    //я не могу взять первую букву по индесу[0]
    console.log(document.getElementById("selector").value);
    console.log(typeof document.getElementById("selector").value);
    //Если первый символ селектора это "." то создаю блок
    if (this.selector[0] === ".") {
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
    } else if (this.selector[0] === "#") {
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
  };
}

let newElement = new DomElement(
  document.getElementById("selector").value,
  document.getElementById("height").value,
  document.getElementById("width").value,
  document.getElementById("bg").value,
  document.getElementById("fontsize").value
);

let button = document.getElementById("button");
button.addEventListener("click", newElement.create);
