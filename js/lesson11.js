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

// word сохранятет в себя число при изменении ползунка
let word = document.querySelector(".period-amount");
// При изменении ползунка значение this записывается в функцию и в виде числа передается в word
periodSelect.oninput = function range() {
  word.innerHTML = this.value;
};
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
    appData.budget = +salaryAmount.value;
    appData.checkFullness();

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();

    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();
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
    /* Не понимаю зачем этот метод 
    С ним всё работает как нужно, но в getExpenses такого нет
    либо я не могу найти куда записываюится значения для расходов
    пока что оставлю, как есть*/
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
  calcPeriod: function () {
    return appData.budgetMonth * periodSelect.value;
  },
  /*Пример решения из чата, но оно либо не рабочее ибо нужно переделать под себя
  на первый взгляд всё работает правильно, изначльно у кнопки атрибут дизаблед
  если там есть символ или длина value больше 0, то дизаблед отключается 
  start.disabled = "false";
  если строка ввода пустая значение start.disabled = "true";
  запуск функции происходит в методе старт, но ничего не работает, почему пока не знаю
  */
  checkFullness: function () {
    start.disabled = "true";
    salaryAmount.addEventListener("input", function () {
      if (salaryAmount.value !== "" && salaryAmount.value.length > 0) {
        start.disabled = "false";
      } else if (salaryAmount.value === "") {
        start.disabled = "true";
      }
    });
  },
};
start.addEventListener("click", appData.start);
expensesPlus.addEventListener("click", appData.addExpensesBlock);
incomePlus.addEventListener("click", appData.addIncomeBlock);

//То что ниже убрал что бы не мешало
// console.log("Наша программа включает в себя: ");
// for (let key in appData) {
//   console.log(key, " : ", appData[key]);
// }
