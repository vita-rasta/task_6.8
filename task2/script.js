const consolelog = document.querySelector("#consolelog");

consolelog.addEventListener("click", () => {
  alert("Служит для вывода информации в консоль");
});

const alertExample = document.querySelector("#alert");

alertExample.addEventListener("click", () => {
  alert("Служит для вывода информации в дилоговое окно");
});

const promptExample = document.querySelector("#prompt");

promptExample.addEventListener("click", () => {
  alert("Отображает диалоговое окно с запросом на ввод текста");
});
