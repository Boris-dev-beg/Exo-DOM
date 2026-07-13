window.addEventListener("load", () => {
  // ! 1. Events
  Exo1();
  // ! 2. Add and remove elements
  Exo2();
  // ! 3. CSS Classes
  Exo3();
});

function Exo1() {
  const btn_alert = document.getElementById("btn_alert");
  btn_alert.addEventListener("click", () => {
    alert("Click detected");
  });

  const input_color = document.getElementById("input_color");
  input_color.addEventListener("keydown", () => {
    input_color.style.background = "#d199d1dd";
  });
}

const Tab_list = JSON.parse(localStorage.getItem("list")) || [];
function Exo2() {
  const btn_add = document.getElementById("btn_add");
  const list_container = document.getElementById("list_container");
  
  list_container.innerHTML = "";
  Tab_list.map((elt) => {
    list_container.innerHTML += `<li id=${elt.id} class="list_item">${elt.text}</li>`;
  });
  btn_add.addEventListener("click", () => AddElement());
  removeElement();
}

function Exo3() {
  const link = document.getElementById("link");
  const change_class = document.getElementById("change_class");

  change_class.addEventListener("click", () => {
    if (link.classList.contains("hidden")) {
      link.classList.remove("hidden");
      link.classList.add("active");
    } else {
      link.classList.remove("active");
      link.classList.add("hidden");
    }
  });

  const p_hidden = document.getElementById("p_hidden");
  const show_content = document.getElementById("show_content");

  show_content.addEventListener("click", () => {
    if (p_hidden.classList.contains("hidden")) {
      p_hidden.classList.remove("hidden");
      p_hidden.classList.add("active");
    } else {
      p_hidden.classList.remove("active");
      p_hidden.classList.add("hidden");
    }
  });
}

function AddElement() {
  const id = crypto.randomUUID().split("-")[0];
  Tab_list.push({
    id: id,
    text: `New Element: ${id}`,
  });
  localStorage.setItem("list", JSON.stringify(Tab_list));
  list_container.innerHTML = "";
  Tab_list.map((elt) => {
    list_container.innerHTML += `<li id=${elt.id} class="list_item">${elt.text}</li>`;
  });
  removeElement();
}

function removeElement() {
  const list_li = document.querySelectorAll(".list_item");
  console.log(list_li);
  list_li.forEach((element) => {
    element.addEventListener("click", () => {
      const id = element.getAttribute("id");
      const newArray = Tab_list.filter((elt) => elt.id !== id);

      localStorage.setItem("list", JSON.stringify(newArray));
      console.log(newArray);
      setTimeout(() => window.location.reload(), 200);
    });
  });
}
