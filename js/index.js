 const button = document.getElementById("clickedButton");
  const envelope = document.getElementById("envelope");
 const main = document.getElementById("mainContent");
 const bottomFlap = document.getElementById("bottomFlap");
  button.addEventListener("click", () => {
    envelope.classList.toggle("open");
  });
  bottomFlap.addEventListener("transitionend", () => {
  envelope.classList.add("hidden");
  main.classList.remove("hidden");
  main.classList.add("block");

}, { once: true });
