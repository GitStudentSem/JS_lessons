"use strict";
const isNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
};
const isString = function (string) {
  return !isNumber(string);
};
const start = document.getElementById("start");
const incomePlus = document.getElementsByTagName("button")[0];
const expensesPlus = document.getElementsByTagName("button")[1];
const checkbox = document.querySelector("#deposit-check");
//Поля для ввода возможных доходов
const additionalIncomeItem = document.querySelectorAll(
  ".additional_income-item"
);
const budgetDayValue = document.getElementsByClassName("budget_day-value")[0];
const expensesMonthValue = document.getElementsByClassName(
  "expenses_month-value"
)[0];
const additionalIncomeValue = document.getElementsByClassName(
  "additional_income-value"
)[0];
const additionalExpensesValue = document.getElementsByClassName(
  "additional_expenses-value"
)[0];
const incomePeriodValue = document.getElementsByClassName(
  "income_period-value"
)[0];
const targetMonthValue = document.getElementsByClassName(
  "target_month-value"
)[0];
const salaryAmount = document.querySelector(".salary-amount");
const incomeTitle = document.querySelector(".income-title");
const expensesTitle = document.querySelector(".expenses-title");
let expensesItems = document.querySelectorAll(".expenses-items");
const budgetMonthValue = document.querySelector(".budget_month-value");
const additionalExpensesItem = document.querySelector(
  ".additional_expenses-item"
);
const targetAmount = document.querySelector(".target-amount");
const periodSelect = document.querySelector(".period-select");
let incomeItems = document.querySelectorAll(".income-items");
const periodAmount = document.querySelector(".period-amount");
const cancel = document.getElementById("cancel");
const depositCheck = document.querySelector("#deposit-check");
const depositBank = document.querySelector(".deposit-bank");
const depositAmount = document.querySelector(".deposit-amount");
const depositPercent = document.querySelector(".deposit-percent");

class AppData {
  constructor() {
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
  }
  lockStart() {
    // блокирует кнопку сразу при загрузку странице (проверка на готовность внизу кода)
    start.disabled = true;

    // если строка пустая то блокировка остается
    if (salaryAmount.value === "") {
      start.disabled = true;
      // если не пустая то снимается
    } else {
      start.disabled = false;
    }
  }

  start() {
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
    this.getInfoDeposit();
    this.getBudget();
    this.showResult();
  }

  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    periodAmount.innerHTML = this.getRange();
  }

  getRange() {
    /* нижний слушатель событий запускает эту функцию и она генерирует числа
    которые получает от слушателя. 
    Так как инпут обновляется каждый раз при перетаскивании ползунка, 
    то и значения будут обновляться онлайн.*/
    let rangeNumber = +periodSelect.value;
    // запись числа под полоску
    periodAmount.innerHTML = rangeNumber;
    /* расчет значения, с использованием числа которое получаем напрямую из range, 
    онлайн расчёта сразу не происходит т.к. 
    appData.budgetMonth записывается только при нажатии start*/

    incomePeriodValue.value = this.budgetMonth * +rangeNumber;
    // без return возвращается undefined (не знаю почему точно, это происходит)
    return rangeNumber;
  }

  addExpensesBlock() {
    // cloneNode(true) для того, что бы создать копию с дочерними элементами expensesItem
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll(".expenses-items");
    // Если элементов более трех, то кнопка добавления новых будет скрыта
    if (expensesItems.length === 3) {
      expensesPlus.style.display = "none";
    }
  }

  addIncomeBlock() {
    const cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll(".income-items");
    // Если элементов более трех, то кнопка добавления новых будет скрыта
    if (incomeItems.length === 3) {
      incomePlus.style.display = "none";
    }
  }

  getExpenses() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        this.expenses[itemExpenses] = +cashExpenses;
      }
    });
  }

  getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += this.income[key];
    }
  }

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  }

  getAddIncome() {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  }

  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth =
      this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }
  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === "other") {
      depositPercent.style.display = "inline-block";
      /* Если выбран другой банк, то будет вызвана функция расчета другого процента
       Объявление функции происходит прямо здесь т.к. контекст вызова this
      привязан к changePercent() внутри которой нет функции getOtherPercent 
      поээтому выйдет ошибка*/
      let getOtherPercent = function () {
        /* Как только теряется фокус поля, сразу проходит проверка введенных данных 
        кнопка будет заблокирована до тех пор пока не будет введено верное значение*/
        depositPercent.addEventListener("blur", () => {
          const otherPercent = depositPercent.value;
          if (!isNumber(otherPercent)) {
            depositPercent.value = "0";
            start.disabled = true;
            return alert("Введите число!");
          } else if (0 > +otherPercent || +otherPercent > 100) {
            depositPercent.value = "0";
            start.disabled = true;
            return alert("Введите число от 0 до 100!");
          } else {
            start.removeAttribute("disabled");
            depositPercent.value = otherPercent;
          }
        });
      };
      getOtherPercent();
    } else {
      depositPercent.value = valueSelect;
    }
  }
  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = "inline-block";
      depositAmount.style.display = "inline-block";
      this.deposit = true;
      depositBank.addEventListener("change", this.changePercent);
    } else {
      depositBank.style.display = "none";
      depositAmount.style.display = "none";
      depositBank.value = "";
      depositAmount.value = "";
      this.deposit = false;
      depositBank.removeEventListener("change", this.changePercent);
    }
  }

  reset() {
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
    depositCheck.checked = false;
    start.disabled = true;
  }

  addEventListeners() {
    start.addEventListener("click", this.start.bind(this));
    // запускает метод lockStart что бы сразу блокировать кнопку
    document.addEventListener("DOMContentLoaded", this.lockStart);
    // проверяет значение input и в lockStart на условиях выводится результат
    salaryAmount.addEventListener("input", this.lockStart);
    /* this.getRange.bind(this)); исправляет пробему с NaN алгоритм построен так,
    что расчет происходит только по нажатию на кнопку рассчитать,
    поэтому до этого значение будет равняться 0, что бы убрать NaN */
    periodSelect.addEventListener("input", this.getRange.bind(this));
    expensesPlus.addEventListener("click", this.addExpensesBlock);
    incomePlus.addEventListener("click", this.addIncomeBlock);
    cancel.addEventListener("click", this.reset.bind(this));
    depositCheck.addEventListener("change", this.depositHandler.bind(this));
  }
}

const appData = new AppData();
appData.addEventListeners();
