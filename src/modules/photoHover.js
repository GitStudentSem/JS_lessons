const photoHover = () => {
  const photos = document.querySelectorAll(".command__photo");
  photos.forEach((item) => {
    const changeImg = () => {
      // Сохранение значений src и data в переменные
      const src = item.src;
      const data = item.dataset.img;
      // Замена одного значения на другое
      item.src = data;
      item.dataset.img = src;
    };
    // Вызов функции при разных событиях
    item.addEventListener("mouseenter", changeImg);
    item.addEventListener("mouseleave", changeImg);
  });
};

export default photoHover;
