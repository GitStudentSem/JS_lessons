let money = 45999;
let income = "премия";
let addExpenses = "Квартира, Еда, Коммунальные платежи";
let deposit = true;
let mission = 100000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase().split(", "));

let budgetDay = money / 30;
console.log("budgetDay: ", budgetDay);
