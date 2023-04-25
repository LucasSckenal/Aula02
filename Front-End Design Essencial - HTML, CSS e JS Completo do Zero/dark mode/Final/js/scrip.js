const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.onclick = () => {
  btn.classList.toggle("active");
  container.classList.toggle("active");
};
