/* Напишите функцию на JS. Цель: Убрать все объекты с типом additional, а для basic очки уменьшить в двое.

Изменить необходимо исходный массив*/
"use strict";
const myLesson = [
  { lesson: 1, type: "basic", points: 2 },
  { lesson: 2, type: "additional", points: 4 },
  { lesson: 3, type: "basic", points: 6 },
  { lesson: 4, type: "additional", points: 3 },
  { lesson: 5, type: "basic", points: 4 },
  { lesson: 6, type: "basic", points: 2 },
  { lesson: 7, type: "additional", points: 2 },
  { lesson: 8, type: "basic", points: 6 },
  { lesson: 9, type: "basic", points: 4 },
  { lesson: 10, type: "basic", points: 6 },
  { lesson: 11, type: "additional", points: 5 },
  { lesson: 12, type: "basic", points: 2 },
  { lesson: 13, type: "additional", points: 2 },
  { lesson: 14, type: "basic", points: 4 },
  { lesson: 15, type: "additional", points: 1 },
  { lesson: 16, type: "additional", points: 7 },
];
// newLesson Содержит отсортированные элементы
const newLesson = myLesson.filter((elem) => elem.type === "basic");

// count отображает число в массиве
let count = myLesson.length;

// удаляются все элементы с 0 по count, тем самым я полностью очищаю массив
myLesson.splice(0, count);

// Прохожусь по всем элементам массива newLesson,
//добавляю их в myLesson и уменьшаю значаения points
newLesson.forEach((elem) => {
  myLesson.push(elem);
  elem.points /= 2;
});

console.log(myLesson);
