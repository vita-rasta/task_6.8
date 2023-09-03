const link = document.querySelector("a");
link.addEventListener("click", function (event) {
  event.preventDefault();
  this.textContent = prompt();
});
