"use strict";
// Проверка на число
let isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};
// проверка на строку, если это не цифра, значит это строка
let isString = function (string) {
  return !isNumber(string);
};
let start = function () {
  let money;
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
  return +money;
};
let money = start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  mission: 100000,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm("Есть ли у вас дополнительный заработок?")) {
      let itemIncome;
      //Проверяет на строку
      do {
        itemIncome = prompt("Какой у вас дополнительный заработок?");
      } while (!isString(itemIncome));
      let cashIncome;
      // проверяет на число
      do {
        cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?");
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = +cashIncome;
    }
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую",
      "кварплата, еда, бензин"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(", ");

    let upperMass = []; // Сюда вносятся элементы которые с большой буквы
    for (let i = 0; i < appData.addExpenses.length; i++) {
      //прохожу по всем элементам массива
      // upper принимает в себя каждый элемент и делает его с заглавной буквы
      let upper =
        appData.addExpenses[i][0].toUpperCase() +
        appData.addExpenses[i].slice(1);
      upperMass.push(upper); // отправляю этот элемент в новый массив с заглавными буквамии
    }
    let upperStr = upperMass.join(", "); // бью эдементы нового массива через запятую
    console.log("Возвожные расходы: ", upperStr);
    ///
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      let question;
      //Проверяет на строку
      do {
        question = prompt("Введите обязательную статью расходов?");
      } while (!isString(question));
      let answer;
      do {
        answer = prompt("Во сколько это обойдется?");
      } while (!isNumber(answer));

      /*
      В question попадает ответ пользователя, делаю его ключом через квадратные скобки
      В answer попадает сумма, проверяю её на число и через +answer записываю значение в виде числа
      */
      appData.expenses[question] = +answer;
    }
  },

  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth += sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    if (Math.ceil(appData.mission / appData.budgetMonth) > 0) {
      console.log(
        "Цель будет достигнута за " +
          Math.ceil(appData.mission / appData.budgetMonth) +
          " месяцев(-а)"
      );
    } else {
      console.log("Цель не будет достигнута");
    }
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
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};
appData.asking();
appData.getBudget();
appData.getTargetMonth();
appData.getExpensesMonth();
appData.getStatusIncome();
appData.getInfoDeposit(); // Проверка на депозит
console.log("Расходы за месяц:", appData.expensesMonth);
console.log("Наша программа включает в себя: ");
for (let key in appData) {
  console.log(key, " : ", appData[key]);
}

// Верстка
// Расчитать
let calculate = document.getElementById("start");
// Добавить категорию (плюсы)
let firstAdd = document.getElementsByTagName("button")[0];
let secondAdd = document.getElementsByTagName("button")[1];
//Чекбокс
let checkbox = document.querySelector("#deposit-check");
//Поля для ввода возможных доходов
let additionalIncomeItem = document.querySelectorAll(".additional_income-item");
// Поля в правой части программы
let budgetDayValue = document.getElementsByClassName("budget_day-value");
let expensesMonthValue = document.getElementsByClassName(
  "expenses_month-value"
);
let additionalIncomeValue = document.getElementsByClassName(
  "additional_income-value"
);
let additionalExpensesValue = document.getElementsByClassName(
  "additional_expenses-value"
);
let incomePeriodValue = document.getElementsByClassName("income_period-value");
let targetMonthValue = document.getElementsByClassName("target_month-value");
// Оставшиеся поля
let salaryAmount = document.querySelector(".salary-amount");
let incomeTitle = document.querySelector(".income-title");
let incomeAmount = document.querySelector(".income-amount");
let expensesTitle = document.querySelector(".expenses-title");
let expensesAmount = document.querySelector(".expenses-amount");
let budgetMonthValue = document.querySelector(".budget_month-value");
let additionalExpensesItem = document.querySelector(
  ".additional_expenses-item"
);
let targetAmount = document.querySelector(".target-amount");
let periodSelect = document.querySelector(".period-select");
