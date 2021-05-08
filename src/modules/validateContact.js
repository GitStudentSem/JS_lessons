const validateContact = (name, email, phone) => {
  name.addEventListener("input", () => {
    // [^а-яё\-\s] Обрезает все символы кроме русских букв тире и пробел
    name.value = name.value.replace(/[^а-яё\s]/gi, "");
  });
  name.addEventListener("blur", () => {
    // Имя содержит 2-50 символов
    if (name.value.length >= 2 && name.value.length < 50) {
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
    } else {
      name.value = "";
      alert("Имя должно содержать от 2 до 50 символов!");
    }
  });

  email.addEventListener("input", () => {
    // let space = email.value;
    // email.value = "a";
    // email.value = space;
    // [^a-z@-_.!~*'] Обрезает все символы кроме указанных
    // email.value = email.value.replace(/[^\w@.]/g, "");
    email.value = email.value.replace(/[^a-z0-9@\-_.!~'*]/g, "");
  });

  email.addEventListener("blur", () => {
    // Защита от пустой строки
    if (email.value !== "") {
      const validate = (email) => {
        // Проверка на правильность вида e-mail
        const reg = /^([a-z0-9@\-_.!~'*]+\.)*[a-z0-9@\-_.!~'*]+@[a-z0-9@\-_.!~'*]+(\.[a-z0-9@\-_.!~'*]+)*\.[a-z]{2,6}$/;
        if (reg.test(email.value) === false) {
          alert("Введите корректный e-mail");
          return false;
        }
      };
      validate(email);
      // Обрезает 2 и более тире
      email.value = email.value.replace(/-{1,}/g, "-");
      // Удаляет тире в начале и конце строки
      email.value = email.value.replace(/^-|-$/g, "");
    }
  });

  // phone.addEventListener("input", () => {
  //   // [^0-9] Обрезает все символы кроме цифр
  //   phone.value = phone.value.replace(/[^0-9+]/g, "");
  // });

  // phone.addEventListener("blur", () => {
  //   if (phone.value.length <= 12) {
  //     // Обрезает 2 и более тире
  //     phone.value = phone.value.replace(/-{1,}/g, "-");
  //     // Удаляет тире в начале и конце строки
  //     phone.value = phone.value.replace(/^-|-$/g, "");
  //   } else {
  //     phone.value = "";
  //     alert("Телефон должен содержать не более 12 символов!");
  //   }
  // });
  ///////////////////////////
  // Валидатор который давал Макс
  function maskPhone(selector, masked = "+7 (___) ___-__-__") {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
      let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = newValue.indexOf("_");
      if (i != -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      ) {
        this.value = newValue;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  }

  // use

  maskPhone("#form1-phone");
  maskPhone("#form2-phone");
  maskPhone("#form3-phone");
};

export default validateContact;
