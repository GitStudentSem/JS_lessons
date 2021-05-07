const mainForm = () => {
  const name = document.getElementById("form1-name");
  const email = document.getElementById("form1-email");
  const phone = document.getElementById("form1-phone");
  validateContact(name, email, phone);
};

import validateContact from "./validateContact";
export default mainForm;
