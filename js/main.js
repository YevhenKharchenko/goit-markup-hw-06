const modalBtn = document.querySelector(".main-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

const contextMenu = document.querySelector(".context-menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeContextBtn = document.querySelector(".context-menu-close-btn");

menuBtn.addEventListener("click", () => {
  contextMenu.classList.add("is-open");
});

closeContextBtn.addEventListener("click", () => {
  contextMenu.classList.remove("is-open");
});
