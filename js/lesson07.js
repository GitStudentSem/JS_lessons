"use strict";
let money,
  start = function () {
    do {
      money = +prompt("Ваш месячный доход?");
    } while (isNaN(parseFloat(money)));
  };
start();
// Кирилл, здесь переменная money и в объекте appData budget: money они связаны?

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
      } while (isNaN(parseFloat(answer))); // если приходит NaN возвращает true

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
  getBudget: function (money) {
    return appData.budget - expensesAmount;
    /* Кирилл, я не понимаю что делать с expensesAmount. По идее это же сумма расходов из функции asking (там происходит их сложение и запись в appData.expenses)
    Значит нужно взять значения ключей appData.expenses и сложить их? Хотел бы использовать переменную sum из метода getExpensesMonth,но я так понимаю, что она не доступна из-за области видимости
    */
  },

  getTargetMonth: function () {
    if (Math.ceil(appData.mission / accumulatedMonth) > 0) {
      console.log(
        "Цель будет достигнута за " +
          Math.ceil(appData.mission / accumulatedMonth) +
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

console.log(typeof money);
console.log(typeof appData.income);
console.log(typeof appData.deposit);
console.log(appData.addExpenses.length);
console.log("Период равен " + appData.period + " месяцев");
console.log("Цель заработать " + appData.mission + " рублей");

let expensesAmount = appData.asking;
// Кирилл, не понимаю куда их детьредактор ругается, что они вызываются раньше объявления
let accumulatedMonth = appData.getBudget(money);
// Кирилл, не понимаю куда их деть, редактор ругается, что они вызываются раньше объявления

appData.getTargetMonth();

let budgetDay = accumulatedMonth / 30;
console.log("Бюджет на день: ", budgetDay);

appData.getStatusIncome(budgetDay);

appData.getExpensesMonth();
/* И что в общей структуре кода начинаю теряться т.к. что-то переименовали, что то добавили, что-то удалили и теряю ход мыслей.
Вроде почти всё сделал но, запутался.
*/
