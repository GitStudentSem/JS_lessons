const popupForm = () => {
  const name = document.getElementById("form3-name");
  const email = document.getElementById("form3-email");
  const phone = document.getElementById("form3-phone");
  validateContact(name, email, phone);
};

import validateContact from "./validateContact";
export default popupForm;
