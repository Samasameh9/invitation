 const button = document.getElementById("clickedButton");
  const envelope = document.querySelector(".relative");

  button.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });