const tog = document.getElementById("tog");
const sidebar = document.getElementById("sidebar");
const togClose = document.getElementById("togClose");

tog.addEventListener("click", () => {
  sidebar.style.left = 0;
});

togClose.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
