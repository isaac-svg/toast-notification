const button = document.querySelector(".btn");
const toasts = document.querySelector(".toasts");
// const notif = document.querySelectorAll(".toast");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];
const type = ["success", "error", "valid"];
button.addEventListener("click", () => {
  const notif = document.createElement("div");
  notif.className = "toast";
  notif.classList.add(`${generateType()}`);
  notif.innerText = generateMessage();
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
});

function generateMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function generateType() {
  return type[Math.floor(Math.random() * type.length)];
}
