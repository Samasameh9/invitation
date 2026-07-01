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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
