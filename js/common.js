const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const btnTop = document.querySelector(".btn-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
  if (window.scrollY > 500) {
    btnTop.classList.add("on");
  } else {
    btnTop.classList.remove("on");
  }
});

btnTop.addEventListener("click", function () {
  gsap.to(window, { scrollTo: 100, duration: 1 });
});

document.querySelector(".family-site button").addEventListener("click", function () {
  document.querySelector(".family-site").classList.toggle("on");
});
