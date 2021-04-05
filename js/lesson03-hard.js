let lang = prompt("Введите язык: ");
if (lang === "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (lang === "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
  default:
    alert("Нет таких значений");
}

let week = [
  ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"],
  ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"],
];
console.log(lang === "ru" ? String(week[0]) : String(week[1]));

let namePerson = prompt("Введите имя: ");
console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподаватель"
    : "Студент"
);
