window.addEventListener("load", () => {
  const btn_toggle = document.getElementById("btn_toggle");
  const text = document.getElementById("text");
  const element_class = document.documentElement.classList

  btn_toggle.addEventListener("click", () => {
    if (element_class.contains("dark")) {
        text.innerText = 'Ligth Mode'
      element_class.remove("dark");
    } else {
        text.innerText = 'Dark Mode'
      element_class.add("dark");
    }
    console.log(document.documentElement);
  });
});
