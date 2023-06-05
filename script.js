"use strict";
const about = document.querySelector(".about");
const header = this.document.querySelector("header");
const scrollArrow = document.querySelector(".scroll-i");
const mainleft = document.querySelector(".main-left");
const skilsBox = document.querySelector(".skils-box");
const closeSkils = document.querySelector(".close-skils");
const btnSkils = document.querySelector(".fa-chevron-down");
const btnSkils2 = document.querySelector(".openbtn");
const close2 = document.querySelector(".close2");
const contact = document.querySelector(".contact");
const skils = document.querySelector(".skils");
const projectMain = document.querySelector(".project");
const project = document.querySelectorAll(".project-box");
const overlay = document.querySelectorAll(".overlay");
// Yazı silip yazma kodu
let typed = new Typed(".type", {
  strings: ["Enes", "Ögrenci", "Coder"],
  typeSpeed: 60,
  backSpeed: 120,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
  fadeOut: true,
});
// Header kaydırmak için
/* window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
}); */
/* window.addEventListener("scroll", function () {
  scrollArrow.classList.toggle(`hidden`, this.window.scrollY > 10);
}); */
function openSkills() {
  btnSkils.addEventListener("click", function () {
    closeSkils.classList.toggle("none");
    if (closeSkils.classList.contains("none")) {
      skils.style.height = "50vh";
    } else {
      skils.style.height = "65vh";
    }
  });
  btnSkils2.addEventListener("click", function () {
    close2.classList.toggle("none");
    if (close2.classList.contains("none")) {
      skils.style.height = "50vh";
    } else {
      skils.style.height = "65vh";
    }
  });
}
openSkills();

function scrollActive(parametre, value, distance = 10) {
  window.addEventListener("scroll", function () {
    parametre.classList.toggle(`${value}`, this.window.scrollY > distance);
  });
}
scrollActive(header, "sticky", 50);
scrollActive(about, "active", 200);
scrollActive(scrollArrow, "hidden", 30);
scrollActive(mainleft, "hidden", 1200);
scrollActive(contact, "active", 1500);
scrollActive(skilsBox, "active", 1000);

// Yumuşak scroll etme bütün tarayıcılarda çalışması için
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        80,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
project.forEach((page, i) => {
  project[i].addEventListener("mouseover", function () {
    overlay[i].classList.add("active");
  });
  project[i].addEventListener("mouseout", function () {
    overlay[i].classList.remove("active");
  });
});
