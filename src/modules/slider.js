const slider = () => {
  const slider = document.querySelector(".portfolio-content");
  const slide = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelector(".portfolio-dots");
  const slidesImg = document.querySelectorAll(
    ".portfolio > .container > ul > .portfolio-item"
  );
  // Генерация точек
  const createDot = () => {
    // Цикл на количество слайдов
    slidesImg.forEach(() => {
      let dotCreate = document.createElement("li");
      dotCreate.className = "dot";
      dots.appendChild(dotCreate);
    });
    // let dot в этой области видимости локальна, определяю её что бы первой точке
    // Задать активный слот далее по коду, эта переменная глобальна
    // для функции slider() и от нее происходят расчеты
    let dot = document.querySelectorAll(".dot");
    dot[0].classList.add("dot-active");
  };
  createDot();
  // Поиск точек перенес после их генерации
  const dot = document.querySelectorAll(".dot");

  let currentSlide = 0;
  let interval;
  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, "portfolio-item-active");
    prevSlide(dot, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, "portfolio-item-active");
    nextSlide(dot, currentSlide, "dot-active");
  };
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches(".portfolio-btn, .dot")) {
      return;
    }
    prevSlide(slide, currentSlide, "portfolio-item-active");
    prevSlide(dot, currentSlide, "dot-active");

    if (target.matches("#arrow-right")) {
      currentSlide++;
    } else if (target.matches("#arrow-left")) {
      currentSlide--;
    } else if (target.matches(".dot")) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, "portfolio-item-active");
    nextSlide(dot, currentSlide, "dot-active");
  });

  slider.addEventListener("mouseover", (event) => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      stopSlide();
    }
  });
  slider.addEventListener("mouseout", (event) => {
    if (
      event.target.matches(".portfolio-btn") ||
      event.target.matches(".dot")
    ) {
      startSlide();
    }
  });

  startSlide(1500);
};

export default slider;
