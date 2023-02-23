let intro = document.querySelector(".intro");

let logo = document.querySelector(".logo-header");

let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

//Toaster för start!
var toastEl = document.getElementById('toast-example')
var toast = new bootstrap.Toast(toastEl)
toast.show()

//Kod för nav

const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-on");

// const btns = document.querySelectorAll(".btn");

const div = document.getElementById("hideMe");

const pic = document.getElementById("mainPic");

const navLinks = document.querySelector(".nav-links");
let hamburgerOpen = false;

hamburger.addEventListener("click", function () {
  if (!hamburgerOpen) {
    navLinks.classList.toggle("show-navlinks");
    hamburger.classList.toggle("hamburger-off");

    //Kod för knapparna, gömmer sig när hamburgarmenyn öppnas.
    if (div.style.display === "none") {
      div.style.display = "block";

      //Om hamburgaren inte är på så kommer bilden att hamna under hamburgarmenyn, dvs dess prop ändras.
      pic.style.position = "relative";
    } else {
      div.style.display = "none";

      //Om hamburgaren är öppen så blir containern static.
      pic.style.position = "static";
    }
  } else {
    hamburger.classList.remove("show-navlinks");
    hamburger.classList.remove("hamburger-off");
  }
});





