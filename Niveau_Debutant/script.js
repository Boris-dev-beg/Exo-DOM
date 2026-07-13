window.addEventListener("load", Load());

function Load() {
  // ! Exo - 1
  Exo1();
  // ! Exo - 2
  Exo2();
  // ! Exo - 3
  Exo3();
}

function Exo1() {
  const btn_1_content = document.getElementById("btn-1-content");
  const paragraph_1 = document.getElementById("paragraph-1");
  let content_changed = false;
  btn_1_content.addEventListener("click", () => {
    if (content_changed) {
      paragraph_1.innerText = "Salut a tous !";
      content_changed = false;
    } else {
      paragraph_1.innerText = "Hello World !";
      content_changed = true;
    }
  });

  let btn_color = document.getElementsByClassName("btn-1-color");
  let color_changed = false;
  btn_color[0].addEventListener("click", () => {
    if (color_changed) {
      color_changed = false;
      btn_color[0].style.background = "#ddaaff";
    } else {
      color_changed = true;
      btn_color[0].style.background = "#6bfdfd";
    }
  });
}

function Exo2() {
  const btn_change_title = document.getElementById("change_title");
  const btn_change_img = document.getElementById("change_img");
  let title = document.getElementById("title");
  let image = document.getElementById("image");

  let title_changed = false;
  btn_change_title.addEventListener("click", () => {
    if (title_changed) {
      title_changed = false;
      title.innerText = "New Title";
    } else {
      title_changed = true;
      title.innerText = "Old Title";
    }
  });

  let image_changed = false;
  btn_change_img.addEventListener("click", () => {
    if (image_changed) {
      image_changed = false;
      image.setAttribute("src", "./images/mouse_2.jpeg");
    } else {
      image_changed = true;
      image.setAttribute("src", "./images/pizza_1.jpg");
    }
  });
}

function Exo3() {
  const btn_change_bg = document.getElementById("change_bg");
  const btn_change_style = document.getElementById("change_style");

  let p_bg = document.getElementById("p_bg");
  let p_style = document.getElementById("p_style");

  let bg_changed = false;
  btn_change_bg.addEventListener("click", () => {
    if (bg_changed) {
      p_bg.style.background = "#da8484";
      bg_changed = false;
    } else {
      p_bg.style.background = "#7dd6bc";
      bg_changed = true;
    }
  });

  let style_changed = false;
  btn_change_style.addEventListener("click", () => {
    if (style_changed) {
      p_style.style.fontWeight = 500
      style_changed = false;
    } else {
      p_style.style.fontWeight = 700
      style_changed = true;
    }
  });
}
