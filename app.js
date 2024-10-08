const profileBtn = document.querySelector(".profile-btn");
const menuBtn = document.querySelector(".menu-btn");
const profileDropdown = document.querySelector(".profile");
const menuDropdown = document.querySelector(".menu");

profileBtn.addEventListener("click", () => {
  profileDropdown.classList.toggle("show");
  menuDropdown.classList.remove("show");
});

menuBtn.addEventListener("click", () => {
  menuDropdown.classList.toggle("show");
  profileDropdown.classList.remove("show");
});

////////!SECTION Image Carousel

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  crousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  crousel();
});

function crousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.visibility = "visible";
  } else {
    nextBtn.style.visibility = "hidden";
  }

  if (counter > 0) {
    prevBtn.style.visibility = "visible";
  } else {
    prevBtn.style.visibility = "hidden";
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
