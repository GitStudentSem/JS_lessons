const calculatorForm = () => {
  let inputs = document.querySelectorAll(".calc-block > input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      // [^0-9] Обрезает все символы кроме цифр
      // ^ это отрицание т.е. будет обрезано всё что не цифра
      input.value = input.value.replace(/[^0-9]/g, "");
    });
  });
};

export default calculatorForm;
