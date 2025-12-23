const menuBtn = document.querySelector(".menu");
const dropdown = document.querySelector(".menu-dropdown");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  dropdown.classList.toggle("open");
});
