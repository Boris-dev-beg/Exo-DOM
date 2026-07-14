window.addEventListener("load", () => {
  // ! Counter
  counter();

  // ! Caroussel
  carrousel();
});

function counter() {
  let cpt = 1;
  const p_cpt = document.getElementById("p_cpt");
  const btn_cpt = document.getElementById("btn_cpt");

  btn_cpt.addEventListener("click", () => {
    p_cpt.innerText = `${cpt++}`;
  });
}

let currentSlide = 0;

function carrousel() {
  const images = document.querySelectorAll(".items_container img");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  prev.addEventListener("click", () => slideTo(currentSlide - 1, images));
  next.addEventListener("click", () => slideTo(currentSlide + 1, images));
}

function slideTo(index, images) {

  if (index >= images.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = images.length - 1;
  } else {
    currentSlide = index;
  }

  images.forEach((img) => {
    img.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  const imageNumber = document.getElementById("image_number");
  if (imageNumber) {
    imageNumber.innerText = currentSlide + 1;
  }
}