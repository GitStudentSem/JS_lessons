"use strict";
// Основная работа программы без классов и прототипов просто на функциях
function parametrs() {
  // получение полей и запись их значений в переменные
  const inputs = {
    selector: document.getElementById("selector").value,
    height: document.getElementById("height").value,
    width: document.getElementById("width").value,
    bg: document.getElementById("bg").value,
    /* ВНИМАНИЕ КОСТЫЛЬ т.к. класс для значения передается из названия ключа, то
    класс fontSize намеренно написан camelCase что бы его класс и значение совпали
    в противном случае очистки поля размер шрифта не произойдет*/
    fontSize: document.getElementById("fontSize").value,
  };
  function clear() {
    for (var key in inputs) {
      document.getElementById(key).value = "";
    }
  }
  function create() {
    //Если первый символ селектора это "." то создаею блок
    if (inputs.selector[0] === ".") {
      // Создание самого блока добавление класса и вывод на страницу
      let block = document.createElement("div");
      document.body.appendChild(block);
      block.className = inputs.selector;
      block.innerHTML = `Вы создали блок с классом ${inputs.selector}`;
      // стили для созданного блока
      // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
      block.style.cssText = `
      height: ${+inputs.height}px;
      width: ${+inputs.width}px;
      background-color: ${inputs.bg};
      font-size: ${+inputs.fontSize}px;
      display: inline-block;
      margin: 15px;
  `;
      clear();
    } else if (inputs.selector[0] === "#") {
      // Создание самого блока добавление класса и вывод на страницу
      let block = document.createElement("p");
      document.body.appendChild(block);
      block.id = inputs.selector;
      block.innerHTML = `Вы создали параграф с id ${inputs.selector}`;
      // стили для созданного блока
      // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
      block.style.cssText = `
      height: ${+inputs.height}px;
      width: ${+inputs.width}px;
      background-color: ${inputs.bg};
      font-size: ${+inputs.fontSize}px;
      margin: 15px;
      display: inline-block;
  `;
      clear();
    } else {
      // Очистка полей при ошибке (неправильное имя селектора)
      clear();
      alert("Введите правильный селектор! (например .section или #text)");
    }
  }
  create();
}
let button = document.getElementById("button");
button.addEventListener("click", parametrs);
