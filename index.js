"use strict";
// add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// NavBar toggle for mobile
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElements(navTogglers, "click", toggleNavbar);

// Header
// active header when window scroll down to 100px
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
//  Hero section slider
const sliders = document.querySelectorAll("[data-slider");
const initSlider = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]"
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next");
  let currentSlidePos = 0;
  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };
  // next slide
  const slideNext = function () {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;
    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }
    moveSliderItem();
  };
  sliderNextBtn.addEventListener("click", slideNext);
  // Previous slide
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }
    moveSliderItem();
  };
  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
};

for (let i = 0, len = sliders.length; i < len; i++) {
  initSlider(sliders[i]);
}
// Set an interval to automatically show the next slide every 3 seconds
// setInterval(slideNext, 3000);

// ================================================for offer show & hide
const tabProduct = document.getElementById("tab_product");
const tabExpertise = document.getElementById("tab_expertise");
const tabServices = document.getElementById("tab_services");
const tabTechnology = document.getElementById("tab_technology");

tabProduct.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullProduct = document.getElementById("product");
  fullProduct.style.display = "grid";
});

tabExpertise.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullExpertise = document.getElementById("expertise");
  fullExpertise.style.display = "grid";
});

tabServices.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullServices = document.getElementById("services");
  fullServices.style.display = "grid";
});
tabTechnology.addEventListener("click", () => {
  let allOffer = document.querySelectorAll(".show_hide");

  allOffer.forEach((offer) => {
    offer.style.display = "none";
  });
  const fullTechnology = document.getElementById("technology");
  fullTechnology.style.display = "grid";
});
