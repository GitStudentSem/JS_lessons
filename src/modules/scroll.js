const scroll = (scrollLink) => {
  // scrollLink.preventDefault();
  const id = scrollLink.getAttribute("href");
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scroll;
