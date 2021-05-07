const validateContact = (name, email, phone) => {
  name.addEventListener("input", () => {
    // [^а-яё\-\s] Обрезает все символы кроме русских букв тире и пробел
    name.value = name.value.replace(/[^а-яё\s]/gi, "");
  });
  name.addEventListener("blur", () => {
    // Заменяет 2 и более тире на один
    name.value = name.value.replace(/-{1,}/g, "-");
    // Заменяет 2 и более пробела на один
    name.value = name.value.replace(/\s{1,}/gi, " ");
    // Удаляет пробелы и тире в начале и конце строки
    name.value = name.value.replace(/^\s|\s$|^-|-$/g, "");
    // первая буква большая, остальные маленькие
    // ЗАщита от пустой строки, что бы консоль не ругалась
    if (name.value !== "") {
      // Массив для хранения отдельных слов
      let nameFirstBig = [];
      // Бью строку по пробелу и создаю массив из слов
      let word = name.value.split(" ");
      word.forEach((item) => {
        // Каждый элемент массива привожу к большой букве
        item = item[0].toUpperCase() + item.slice(1);
        // отправляю элементы в пустой массив на хранение
        nameFirstBig.push(item);
      });
      // Делаю из массива строку и отправляю её в значение поля инпут
      name.value = nameFirstBig.join(" ");
    }
  });

  email.addEventListener("input", () => {
    // let space = email.value;
    // email.value = "a";
    // email.value = space;
    // [^a-z@-_.!~*'] Обрезает все символы кроме указанных
    // email.value = email.value.replace(/[^\w@.]/g, "");
    email.value = email.value.replace(/[^a-z@\-_.!~'*]/g, "");
  });

  email.addEventListener("blur", () => {
    // Обрезает 2 и более тире
    email.value = email.value.replace(/-{1,}/g, "-");
    // Удаляет тире в начале и конце строки
    email.value = email.value.replace(/^-|-$/g, "");
  });

  phone.addEventListener("input", () => {
    // [^0-9] Обрезает все символы кроме цифр
    phone.value = phone.value.replace(/[^0-9+]/g, "");
  });

  phone.addEventListener("blur", () => {
    // Обрезает 2 и более тире
    phone.value = phone.value.replace(/-{1,}/g, "-");
    // Удаляет тире в начале и конце строки
    phone.value = phone.value.replace(/^-|-$/g, "");
  });
};

export default validateContact;
