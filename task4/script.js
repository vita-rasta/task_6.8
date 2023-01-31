const textChange = document.querySelector("#textChange");

textChange.addEventListener("click", function (event) {
  event.preventDefault();
  let text = prompt("Измените текст");
  this.textContent = text;
});
