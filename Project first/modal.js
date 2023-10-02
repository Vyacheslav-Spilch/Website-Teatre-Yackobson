const btns = document.querySelectorAll("*[data-modal-btn]");
const modalClose = document.querySelectorAll("*[data-modal-close]");

function openModal() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let currentBtn = btns[i].getAttribute("data-modal-btn");
      let modal = document.querySelector(
        "[data-modal-window='" + currentBtn + "']"
      );
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"
    });
  }
}
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", function () {
    let currentClose = modalClose[i].getAttribute("data-modal-close");
    let modalAll = document.querySelector(
      "[data-modal-window='" + currentClose + "']"
    );
    modalAll.style.display = "none";
    document.body.style.overflow = ""
  });
}

window.onclick = function (e) {
  if (e.target.hasAttribute("data-modal-window")) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
      document.body.style.overflow = ""
    }
  }
};
openModal();
