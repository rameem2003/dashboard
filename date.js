const date = document.querySelectorAll(".date td div");

const btn = document.getElementById("calander");
const calander = document.getElementById("windows");
const close = document.getElementById("close");
// console.log(date);

btn.addEventListener("click", () => {
  calander.classList.remove("hidden");
});

close.addEventListener("click", () => {
  calander.classList.add("hidden");
});
