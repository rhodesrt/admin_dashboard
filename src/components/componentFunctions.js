export const sidebarAnimation = (linkArray) => {
  linkArray.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      e.target.classList.add("widgetHover");
    });
    link.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("widgetHover");
    });
  });
};
