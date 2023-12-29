const modalBtn = document.querySelector(".main-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", onModalButtonClick);

function onModalButtonClick() {
  modal.classList.add("is-open");
}

closeBtn.addEventListener("click", onCloseButtonClick);

function onCloseButtonClick() {
  modal.classList.remove("is-open");
}

const contextMenu = document.querySelector(".context-menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeContextBtn = document.querySelector(".context-menu-close-btn");

menuBtn.addEventListener("click", onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add("is-open");
}

closeContextBtn.addEventListener("click", onCloseContextButtonClick);

function onCloseContextButtonClick() {
  contextMenu.classList.remove("is-open");
}
