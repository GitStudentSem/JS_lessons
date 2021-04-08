"use strict";
// lesson 2
let money,
  income = "премия",
  addExpenses = prompt(
    "Перечислите возможные расходы за рассчитываемый период через запятую",
    "кварплата,еда,бензин"
  ),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 100000,
  period = 6,
  expenses = [];

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(String(addExpenses.toLowerCase().split(",")));

do {
  money = +prompt("Ваш месячный доход?");
} while (isNaN(parseFloat(money)));
console.log("money тип данных: ", typeof money);

let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?");

    let expens;

    do {
      expens = prompt("Во сколько это обойдется?");
    } while (isNaN(parseFloat(expens))); // если приходит NaN возвращает true

    sum += +expens;
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

function getAccumulatedMonth(money) {
  return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth(money);

function getTargetMonth() {
  if (Math.ceil(mission / accumulatedMonth) > 0) {
    console.log(
      "Цель будет достигнута за " +
        Math.ceil(mission / accumulatedMonth) +
        " месяцев(-а)"
    );
  } else {
    console.log("Цель не будет достигнута");
  }
}
getTargetMonth();

let budgetDay = accumulatedMonth / 30;
console.log("Бюджет на день: ", budgetDay);

function getStatusIncome(budgetDay) {
  if (budgetDay > 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (1200 >= budgetDay >= 600) {
    console.log("У вас средний уровень дохода");
  } else if (600 > budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  }
}
getStatusIncome(budgetDay);
