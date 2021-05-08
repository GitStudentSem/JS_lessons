const toggleMenu = () => {
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul > li > a");
  const body = document.querySelector("body");

  const openMenu = () => {
    menu.classList.add("active-menu");
  };
  const closeMenu = () => {
    menu.classList.remove("active-menu");
  };

  body.addEventListener("click", (event) => {
    let target = event.target;

    // Блокировка слушателя на всем body
    if (
      !target.closest(".menu, .close-btn") &&
      !target.matches("menu a") &&
      target.closest(".active-menu")
    ) {
      return;
    }

    // Открыть меню
    if (target.closest(".menu")) {
      openMenu();
      // Нажатие на крестик
    } else if (target.closest(".close-btn")) {
      event.preventDefault();
      closeMenu();
      // Нажатие вне меню
    } else if (!target.closest(".active-menu")) {
      closeMenu();
      // Нажатие на пункт меню
    } else if (target.matches("menu a")) {
      event.preventDefault();
      closeMenu();
      scroll(target);
    }
  });
};
import scroll from "./scroll";
export default toggleMenu;
