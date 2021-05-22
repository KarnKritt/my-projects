window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const bar = document.querySelector(".fa-bars");
const time = document.querySelector(".fa-times");
const nav = document.querySelector("nav");
bar.addEventListener("click", function () {
  bar.classList.toggle("active");
  time.classList.toggle("active");
  nav.classList.toggle("active");
});
time.addEventListener("click", function () {
  time.classList.toggle("active");
  bar.classList.toggle("active");
  nav.classList.toggle("active");
});
