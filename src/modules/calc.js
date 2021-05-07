const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcDay = document.querySelector(".calc-day");
  const calcCount = document.querySelector(".calc-count");
  const totalValue = document.getElementById("total");

  const countSum = () => {
    let total = 0;
    let countValue = 1;
    let dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }

    // Плавный счетчик расчет анимации
    const animate = ({ timing, draw, duration }) => {
      let start = performance.now();
      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
          timeFraction = 1;
        }
        let progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      });
    };

    // Вызов анимации с параметрами
    const counter = () => {
      totalValue.textContent = 0;
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          totalValue.textContent = Math.floor(total * progress);
        },
      });
    };
    counter();
  };

  calcBlock.addEventListener("change", (event) => {
    const target = event.target;
    if (
      target === calcType ||
      target === calcSquare ||
      target === calcDay ||
      target === calcCount
    ) {
      countSum();
    }
  });
};

export default calc;
