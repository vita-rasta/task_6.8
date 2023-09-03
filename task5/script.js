let txt = document.querySelector("#txt");
let txtDub = document.querySelector("#duplicateField");
const but = document.querySelector("button");

txt.addEventListener("keyup", () => {
  txtDub.textContent = txt.value;
});

but.addEventListener("click", (e) => {
  console.log(txt.value);
  txt.value = "";
  txtDub.textContent = "";
  event.preventDefault();
});
