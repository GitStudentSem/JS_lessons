"use strict";
// Проверка на число
let isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};
// проверка на строку, если это не цифра, значит это строка
let isString = function (string) {
  return !isNumber(string);
};
// Расчитать
let start = document.getElementById("start");
// Добавить категорию (плюсы)
let incomePlus = document.getElementsByTagName("button")[0];
let expensesPlus = document.getElementsByTagName("button")[1];
//Чекбокс
let checkbox = document.querySelector("#deposit-check");
//Поля для ввода возможных доходов
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");
// Поля в правой части программы
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
let expensesMonthValue = document.getElementsByClassName(
  "expenses_month-value"
)[0];
let additionalIncomeValue = document.getElementsByClassName(
  "additional_income-value"
)[0];
let additionalExpensesValue = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
let incomePeriodValue = document.getElementsByClassName(
  "income_period-value"
)[0];
let targetMonthValue = document.getElementsByClassName("target_month-value")[0];
// Оставшиеся поля
let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-title");
let expensesTitle = document.querySelector(".expenses-title");
let expensesItems = document.querySelectorAll(".expenses-items");
let budgetMonthValue = document.querySelector(".budget_month-value");
let additionalExpensesItem = document.querySelector(
  ".additional_expenses-item"
);
let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector(".period-select");
let incomeItems = document.querySelectorAll(".income-items");
let periodAmount = document.querySelector(".period-amount");
let cancel = document.getElementById("cancel");
let checkBox = document.querySelector("#deposit-check");
let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  start: function () {
    let allInput = document.querySelectorAll(".data input[type=text]");
    allInput.forEach(function (item) {
      item.setAttribute("disabled", true);
    });
    incomePlus.setAttribute("disabled", true);
    expensesPlus.setAttribute("disabled", true);
    start.style.display = "none";
    cancel.style.display = "block";

    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();

    this.showResult();
  },
  lockStart: function () {
    // блокирует кнопку сразу при загрузку странице (проверка на готовность внизу кода)
    start.disabled = true;

    // если строка пустая то блокировка остается
    if (salaryAmount.value === "") {
      start.disabled = true;
      // если не пустая то снимается
    } else {
      start.disabled = false;
    }
  },
  showResult: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth());

    periodAmount.innerHTML = this.getRange();
  },
  getRange: function () {
    /* нижний слушкатель событий запускает эту функцию и она генерирует числа
    которые получает от слушателя. Так как инпут обновляется каждый раз при перетаскивании ползунка, 
    то и значения будут обновляться онлайн.*/
    let rangeNumber = +periodSelect.value;
    // запись числа под полоску
    periodAmount.innerHTML = rangeNumber;
    /* расчет значения, с использованием числа которое получаем напрямую из range, 
    онлайн расчёта сразу не происходит т.к. 
    appData.budgetMonth записывается только при нажатии start*/
    incomePeriodValue.value = appData.budgetMonth * rangeNumber;
    // без return возвращается undefined (не знаю почему точно, это происходит)
    return rangeNumber;
  },
  addExpensesBlock: function () {
    // cloneNode(true) для того, что бы создать копию с дочерними элементами expensesItem
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    // Если элементов более трех, то кнопка добавления новых будет скрыта
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    // Если элементов более трех, то кнопка добавления новых будет скрыта
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        // cashExpenses привожу к числу, что бы расчеты из инпута получить число, а не строку
        appData.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        appData.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth += sum;
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return targetAmount.value / appData.budgetMonth;
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (1200 >= appData.budgetDay >= 600) {
      console.log("У вас средний уровень дохода");
    } else if (600 > appData.budgetDay > 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      let deposit;
      // проверяет на число
      do {
        deposit = prompt("Какой годовой процент?");
      } while (!isNumber(deposit));
      appData.percentDeposit = +deposit;
      let money;
      // проверяет на число
      do {
        money = prompt("Какая сумма заложена?");
      } while (!isNumber(money));
      appData.moneyDeposit = +money;
    }
  },
  // Эту часть подсмотрел у Макса
  reset: function () {
    // Запись в переменные всех полей-инпутов
    let inputTextData = document.querySelectorAll(".data input[type=text]");
    // запись в переменную всех полей результатов расчетов
    let resetInputAll = document.querySelectorAll(".result input[type=text]");

    //С помощью forEach перебираются поля
    inputTextData.forEach(function (elem) {
      elem.value = "";
      elem.removeAttribute("disabled");
      // значение 1 устанавливает счетчик ползунка на 1
      periodSelect.value = "1";
      //перезапись текстового поля под полоской
      periodAmount.innerHTML = periodSelect.value;
    });

    //Очистка всех полей с данными
    resetInputAll.forEach(function (elem) {
      elem.value = "";
    });

    // В двух циклах удаляются добавленные поля input
    // удаление через parentNode так жк как и добавлялись
    // если было добавено максимально количество input то нуно вернуть поюсик
    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].parentNode.removeChild(incomeItems[i]);
      incomePlus.style.display = "block";
    }
    for (let i = 1; i < expensesItems.length; i++) {
      expensesItems[i].parentNode.removeChild(expensesItems[i]);
      expensesPlus.style.display = "block";
    }
    // Возврат "базы данных" исходное состояние
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    // при активации кнопки сбросить она отключается
    cancel.style.display = "none";
    // и вместо нее подключается кнопка старт
    start.style.display = "block";
    // включение кнопок которые были заблокированы
    // плюсики для инпутов
    incomePlus.removeAttribute("disabled");
    expensesPlus.removeAttribute("disabled");
    // чекбокс для депозита
    checkBox.checked = false;
  },
};
start.addEventListener("click", appData.start.bind(appData));
// запускает метод lockStart что бы сразу блокировать кнопку
document.addEventListener("DOMContentLoaded", appData.lockStart);
// проверяет значение input и в lockStart на условиях выводится результат
salaryAmount.addEventListener("input", appData.lockStart);
periodSelect.addEventListener("input", appData.getRange);
expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);
cancel.addEventListener("click", appData.reset.bind(appData));
