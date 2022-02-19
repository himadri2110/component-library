const sidebarDiv = document.querySelector("aside");
const mainDiv = document.querySelector("main");

const hamburgerIcon = document.querySelector("i.fa-bars");

const toggleSidebar = () => {
  sidebarDiv.classList.toggle("hide-sidebar");
  mainDiv.classList.toggle("hide-main");
};

hamburgerIcon.addEventListener("click", toggleSidebar);
