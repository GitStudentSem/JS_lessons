const togglePopUp = () => {
  const popup = document.querySelector(".popup");
  const popupBtn = document.querySelectorAll(".popup-btn");

  // Анимация
  // Это моя анимация из прошлого урока переделанная под этот проект
  let count = 0;
  let modalAnimate = () => {
    let modalAnimateID = requestAnimationFrame(modalAnimate);
    if (count <= 50) {
      count++;
      popup.style.opacity = `${(count * 2) / 100}`;
    } else {
      cancelAnimationFrame(modalAnimateID);
    }
  };

  // Открытие модального окна
  popupBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      popup.style.display = "block";
      const screenWidth = window.screen.width;
      if (screenWidth >= 768) {
        modalAnimate();
      }
    });
  });

  // Закрытие по оверлэю
  popup.addEventListener("click", (event) => {
    let target = event.target;
    // Закрытие по крестику
    if (target.classList.contains("popup-close")) {
      count = 0;
      popup.style.display = "none";
    } else {
      target = target.closest(".popup-content");

      if (!target) {
        count = 0;
        popup.style.display = "none";
      }
    }
  });
};

export default togglePopUp;
