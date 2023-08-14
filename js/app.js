const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

const expirationTime = 600 * 1000; // 10 minuter

window.addEventListener("DOMContentLoaded", () => {
  const introShownTimestamp = localStorage.getItem("introShownTimestamp");
  const currentTime = new Date().getTime();

  if (!introShownTimestamp || currentTime - introShownTimestamp > expirationTime) {
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

    localStorage.setItem("introShownTimestamp", currentTime);
  } else {
    intro.style.display = "none";
  }
});



//Toaster för start!
var toastEl = document.getElementById('toast-example');
var options = {
  autohide: true,
  delay: 8000 // 8 sekunder innan den försvinner.
};
var toast = new bootstrap.Toast(toastEl, options);
toast.show();
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


//Kod för att ta bort text efter att kontaktformuläret är skickat.

document.addEventListener("DOMContentLoaded", function() {
  // Check if form data is present in sessionStorage
  if (sessionStorage.getItem("formSubmitted")) {
    // Clear form fields
    document.getElementById("contact").reset();

    // Remove form data from sessionStorage
    sessionStorage.removeItem("formSubmitted");
  }
});

document.getElementById("contact").addEventListener("submit", function(event) {
  // Prevent the form from submitting immediately
  event.preventDefault();

  // Submit the form
  document.getElementById("contact").submit();

  // Store form submission flag in sessionStorage
  sessionStorage.setItem("formSubmitted", true);
});





