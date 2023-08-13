// navbar scrolling when using smaller devices for closing

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// silder using swiper function second section starts
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
});
// silder using swiper function second section ends

var swiper = new Swiper(".gallery-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 5,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let myfun = document.getElementById("myfun");
myfun.addEventListener("click", function myFunction() {
  alert("BOOKING DONE SUCCESSFULLY...!");
});
let availability = document.getElementById("availability");
availability.addEventListener("click", function checkAvailbiltiy() {
  alert("Rooms Are Available...!");
});
