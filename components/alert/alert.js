// Close alert

const alertCloseIcons = document.querySelectorAll(".alert-close > i");

alertCloseIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.parentElement.style.display = "none";
  });
});
