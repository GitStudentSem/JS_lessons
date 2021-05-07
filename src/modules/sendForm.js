const sendForm = (form) => {
  const errorMessage = "Что-то пошло не так...";
  const loadMessage = "Загрузка...";
  const successMessage = "Спасибо! Мы с вами свяжемся!";

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;

    const clearMessage = () => {
      statusMessage.textContent = "";
    };

    const formData = new FormData(form);
    let body = {};

    for (let val of formData.entries()) {
      body[val[0]] = val[1];
    }
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        statusMessage.textContent = successMessage;
        form.reset();
        setTimeout(clearMessage, 3000);
      })
      .catch((error) => {
        console.error(error);
        statusMessage.textContent = errorMessage;
        form.reset();
        setTimeout(clearMessage, 3000);
      });
  });
  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };
};

export default sendForm;
