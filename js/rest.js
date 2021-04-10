// Прбники кода, просто тестовый файл
let obj = {};
for (let i = 0; i < 2; i++) {
  let question = prompt("Что купить"),
    answer;
  do {
    answer = prompt("Во сколько это обойдется?");
  } while (isNaN(parseFloat(answer))); // если приходит NaN возвращает true

  obj[question] = +answer;
}

console.log(obj);
let sum = 0;
for (let key in obj) {
  sum += obj[key];
}
console.log(sum);
