function greetUser() {
  const nameInput = document.getElementById("nameInput");
  const message = document.getElementById("message");
  const name = nameInput.value.trim();

  // Reset
  message.classList.remove("show");
  void message.offsetWidth;

  if (name === "") {
    message.innerHTML = `<span id="error">🚫 Please enter your name!</span>`;
  } else {
    message.innerHTML = `🎉 Hi <strong>${name}</strong>, welcome to <strong>SaralTech</strong>!`;
  }

  message.classList.add("show");
}
