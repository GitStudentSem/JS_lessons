"use strict";
//Класс
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
let addBlock = new DomElement(".block", "100", "100", "yellow", "20");
let addParagraph = new DomElement("#ident", "200", "200", "green", "30");

DomElement.prototype.create = function () {
  if (this.selector[0] === ".") {
    // Создание самого блока добавление класса и вывод на страницу
    let block = document.createElement("div");
    document.body.appendChild(block);
    block.className = this.selector;
    block.innerHTML = `Вы создали блок с классом ${this.selector}`;
    // стили для созданного блока
    // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
    block.style.cssText = `
      height: ${+this.height}px;
      width: ${+this.heigh}px;
      background-color: ${this.bg};
      font-size: ${+this.fontSize}px;
      display: inline-block;
      margin: 15px;
  `;
  } else {
    // Создание самого блока добавление класса и вывод на страницу
    let block = document.createElement("p");
    document.body.appendChild(block);
    block.id = this.selector;
    block.innerHTML = `Вы создали параграф с id ${this.selector}`;
    // стили для созданного блока
    // margin: 15px и  display: inline-block для красоты, что бы блоки не слипались
    block.style.cssText = `
      height: ${+this.height}px;
      width: ${+this.width}px;
      background-color: ${this.bg};
      font-size: ${+this.fontSize}px;
      margin: 15px;
      display: inline-block;
  `;
  }
};

addBlock.create();
addParagraph.create();
