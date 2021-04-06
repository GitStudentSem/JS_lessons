"use strict";
// lesson 2
let money = Number(prompt("Ваш месячный доход?"));
let income = "премия";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "кварплата,еда,бензин"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 100000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(String(addExpenses.toLowerCase().split(",")));

// lesson 3

function getExpensesMonth() {
  let spending1 = prompt("Введите обязательную статью расходов?", "кварплата");
  let cost1 = Number(prompt("Во сколько это обойдется?"));
  let spending2 = prompt("Введите обязательную статью расходов?", "еда");
  let cost2 = Number(prompt("Во сколько это обойдется?"));
  return cost1 + cost2;
}

function getAccumulatedMonth(money) {
  return money - getExpensesMonth();
}

let accumulatedMonth = getAccumulatedMonth(money);

function getTargetMonth() {
  console.log(
    "Цель будет достигнута за " +
      Math.ceil(mission / accumulatedMonth) +
      " месяцев(-а)"
  );
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
