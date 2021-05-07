const nextSlide = () => {
  const slide = document.querySelector("main > a");
  slide.addEventListener("click", (event) => {
    event.preventDefault();
    scroll(slide);
  });
};
import scroll from "./scroll";
export default nextSlide;
