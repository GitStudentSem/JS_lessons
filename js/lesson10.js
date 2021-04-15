let list = document.querySelector(".books");
let books = document.querySelectorAll(".book");
console.log("books: ", books);
// Восстановил порядок книг
list.append(books[1]); // 1
list.append(books[0]); // 2
list.append(books[4]); // 3
list.append(books[3]); // 4
list.append(books[5]); // 5
list.append(books[2]); // 6

// замена фона
let background = document.querySelector("body");
background.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

// Замена зоголовка
const titleThree = document.querySelector(
  '[href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"]'
);
titleThree.textContent = "Книга 3. this и Прототипы Объектов";

// Удалить рекламу
var banner = document.querySelector(".adv");
banner.remove();

// Главы во втрой книге
let chapterTwo = document.querySelectorAll("ul")[1];
let chapterTwoElems = chapterTwo.querySelectorAll("li");

chapterTwo.append(chapterTwoElems[0]); // 1
chapterTwo.append(chapterTwoElems[1]); // 2
chapterTwo.append(chapterTwoElems[3]); // 3
chapterTwo.append(chapterTwoElems[6]); // 4
chapterTwo.append(chapterTwoElems[8]); // 5
chapterTwo.append(chapterTwoElems[4]); // 6
chapterTwo.append(chapterTwoElems[5]); // 7
chapterTwo.append(chapterTwoElems[7]); // 8
chapterTwo.append(chapterTwoElems[9]); // 9
chapterTwo.append(chapterTwoElems[2]); // 10
chapterTwo.append(chapterTwoElems[10]); // 11

// Главы в пятой книге
let chapterFive = document.querySelectorAll("ul")[4];
let chapterFiveElems = chapterFive.querySelectorAll("li");

chapterFive.append(chapterFiveElems[0]); // 1
chapterFive.append(chapterFiveElems[1]); // 2
chapterFive.append(chapterFiveElems[9]); // 3
chapterFive.append(chapterFiveElems[3]); // 4
chapterFive.append(chapterFiveElems[4]); // 5
chapterFive.append(chapterFiveElems[2]); // 6
chapterFive.append(chapterFiveElems[6]); // 7
chapterFive.append(chapterFiveElems[7]); // 8
chapterFive.append(chapterFiveElems[5]); // 9
chapterFive.append(chapterFiveElems[8]); // 10
chapterFive.append(chapterFiveElems[10]); // 11

// Добавить главу в 6 книгу
// Создаю элемент списка
let newChapter = document.createElement("li");
// Наполняю контентом
newChapter.innerHTML = "Глава 8: За пределами ES6";

// выбираю нужную книгу
let chapterSix = document.querySelectorAll("ul")[5];
//втсавляю пред последним элементом свою созданную книгу
let chapterSixElems = chapterSix.querySelectorAll("li");

chapterSixElems[9].before(newChapter);
