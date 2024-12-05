let action = document.getElementById("action");
let menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  action.classList.toggle("is-active");
});

let btn_scroll = document.querySelector(".btn-scroll");
console.log(btn_scroll);

window.onscroll = function () {
  if (scrollY >= 500) {
    btn_scroll.style.display = "block";
  } else {
    btn_scroll.style.display = "none";
  }
};

btn_scroll.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};



