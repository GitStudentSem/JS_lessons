"use strict";
// lesson 2
let money = Number(prompt("Ваш месячный доход?"));
let income = "премия";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
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
let spending1 = prompt("Введите обязательную статью расходов?");
let cost1 = Number(prompt("Во сколько это обойдется?"));
let spending12 = prompt("Введите обязательную статью расходов?");
let cost2 = Number(prompt("Во сколько это обойдется?"));
let budgetMonth = money - cost1 - cost2;

console.log(
  "Цель будет достигнута за " +
    Math.ceil(mission / budgetMonth) +
    " месяцев(-а)"
);

let budgetDay = budgetMonth / 30;
console.log("Бюджет на день: ", budgetDay);

if (budgetDay > 1200) {
  console.log("У вас высокий уровень дохода");
} else if (1200 >= budgetDay >= 600) {
  console.log("У вас средний уровень дохода");
} else if (600 > budgetDay > 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
}
