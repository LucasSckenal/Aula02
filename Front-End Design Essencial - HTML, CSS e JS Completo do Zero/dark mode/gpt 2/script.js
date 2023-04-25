const btn = document.getElementById("dark-mode-btn");
const iconMoon = btn.querySelector(".icon.moon");
const iconSun = btn.querySelector(".icon.sun");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  iconMoon.classList.toggle("hidden");
  iconSun.classList.toggle("hidden");
});
