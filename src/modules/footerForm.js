const footerForm = () => {
  const name = document.getElementById("form2-name");
  const email = document.getElementById("form2-email");
  const phone = document.getElementById("form2-phone");
  const message = document.getElementById("form2-message");

  validateContact(name, email, phone);

  message.addEventListener("input", () => {
    message.value = message.value.replace(/[^а-яё\s0-9,.-:;'"/\\]/gi, "");
  });
};
import validateContact from "./validateContact";
export default footerForm;
