const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener("click", () => {
  alert("Служит для вывода информации в консоль");
});

const alertShow = document.querySelector("#alert");

alertShow.addEventListener("click", () => {
  alert("Служит для отображения диалового окна с каким-то текстом");
});

const promtShow = document.querySelector("#prompt");

promtShow.addEventListener("click", () => {
  alert("Служит для отображения диалового окна c запросом на вывод текста ");
});
