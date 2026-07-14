window.addEventListener("load", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", () => CheckEmail());
});

function CheckEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("error");

  if (email.value.trim() === "") {
    error.classList.add("show")
    email.classList.add("email_error")
    error.innerText = "Email is required";
  } else {
      error.classList.remove("show")
      email.classList.remove("email_error")
    alert("Email recu: " + email.value);
  }
}
