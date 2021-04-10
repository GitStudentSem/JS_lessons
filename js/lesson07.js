"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
///
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
  period: 6,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую",
      "кварплата,еда,бензин"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      let question = prompt("Введите обязательную статью расходов?");
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
    appData.budgetDay = appData.budgetMonth / 30;
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
  getStatusIncome: function (budgetDay) {
    if (budgetDay > 1200) {
      console.log("У вас высокий уровень дохода");
    } else if (1200 >= budgetDay >= 600) {
      console.log("У вас средний уровень дохода");
    } else if (600 > budgetDay > 0) {
      console.log("К сожалению у вас уровень дохода ниже среднего");
    }
  },
};
appData.asking();
appData.getBudget();
appData.getTargetMonth();
appData.getExpensesMonth();
appData.getStatusIncome(appData.budgetDay);
console.log(typeof money);
console.log(typeof appData.income);
console.log(typeof appData.deposit);
console.log(appData.addExpenses.length);
console.log("Период равен " + appData.period + " месяцев");
console.log("Цель заработать " + appData.mission + " рублей");
console.log("Бюджет на день: ", appData.budgetDay);
