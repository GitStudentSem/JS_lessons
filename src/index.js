"use strict";
// Таймер
import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import nextSlide from "./modules/nextSlide";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import photoHover from "./modules/photoHover";
import mainForm from "./modules/mainForm";
import popupForm from "./modules/popupForm";
import calculatorForm from "./modules/calculatorForm";
import footerForm from "./modules/footerForm";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";
countTimer("20 may 2021");
// Меню
toggleMenu();
// Попап окно
togglePopUp();
// Перемещение на следующий слайд
nextSlide();
// Табы
tabs();
// Слайдер
slider(0);
// Подмена фото при наведении
photoHover();
// Валидация данных на главном экране
mainForm();
// Валидация попап окна
popupForm();
// Валидация калькулятора
calculatorForm();
//Валидация формы в подвале
footerForm();
// Калькулятор
calc(100);
// Отправка формы через аякс
sendForm(document.getElementById("form1"));
sendForm(document.getElementById("form2"));
sendForm(document.getElementById("form3"));
