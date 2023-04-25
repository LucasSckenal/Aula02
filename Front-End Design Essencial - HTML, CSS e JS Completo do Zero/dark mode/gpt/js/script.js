const toggleThemeButton = document.getElementById("toggle-theme");
const body = document.body;

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
