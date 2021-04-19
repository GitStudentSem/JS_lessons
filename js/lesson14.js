"use strict";
//Класс
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  /* В selector ничего не записывается, но по идее в параметры приходит значение поля
   Скорее всего ошибка с this.selector = selector; не понимаю что присваивается
   В уроке Макса оно так работало, здесь не работает не понимаю где данные в итоге оказываются.
   Если я использую selector[0] какой это selector?
   тот что аргумент из функции или тот что мы присваиваем через this.selector = selector
   */
  this.create = function () {
    /* С selector[0] разобрался (не правильно логи выводил поэтому дамал, что строка)
    Сюда приходит undefined. Вообще не понимаю где данные теряются, 
    у нас три раза записан selector и какой из них содержит данные 
    (и как до него добраться тогда) я не понимаю.*/
    console.log(selector);
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
      document.getElementById("fontSize").value = "";
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
      document.getElementById("fontSize").value = "";
    } else {
      // Очистка полей при ошибке (неправильное имя селектора)
      document.getElementById("selector").value = "";
      document.getElementById("height").value = "";
      document.getElementById("width").value = "";
      document.getElementById("bg").value = "";
      document.getElementById("fontSize").value = "";
      alert("Введите правильный селектор! (например .section или #text)");
    }
  };
}
/* В файле mian реализована автоматическая очистка через объект
в не чистятся ключи объекта, фукция рабочая, но как е поставить сюда пока не придумал
здесь инпуты передаются через параметры и я не могу вставить эту функцию сюда
Возможно нужно переписать получение данных из инпутов не через параметры функции
а через переменные, тогда в этом случае я смогу поставить автоматичеескую функцию очистки полей
но я еще не разобрался с данными где они теряются и как обработать обычным способом для начала */
let newElement = new DomElement(
  document.getElementById("selector").value,
  document.getElementById("height").value,
  document.getElementById("width").value,
  document.getElementById("bg").value,
  document.getElementById("fontSize").value
);

let button = document.getElementById("button");
button.addEventListener("click", newElement.create);
