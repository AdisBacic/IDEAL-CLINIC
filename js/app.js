const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

const expirationTime = 600 * 500; // 5 minuter

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


//Snofallefffect

// const snowfall = document.querySelector('.snowfall');

// function createSnowflake() {
//     const snowflake = document.createElement('div');
//     snowflake.classList.add('snowflake');
//     snowflake.style.left = Math.random() * 100 + 'vw';
//     snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
//     snowflake.style.opacity = Math.random();
//     snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';

//     snowfall.appendChild(snowflake);

//     setTimeout(() => {
//         snowflake.remove();
//     }, 5000);
// }

// setInterval(createSnowflake, 200);

  











//Toaster för start!
var toastEl = document.getElementById('toast-example');
var options = {
  autohide: true,
  delay: 8000 // 8 sekunder innan den försvinner.
};
var toast = new bootstrap.Toast(toastEl, options);
toast.show();

// Enhanced dropdown functionality for all views
document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger-on");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      // Toggle dropdown for both mobile and desktop
      dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function(e) {
      if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }


  // Close mobile menu when clicking outside
  if (navLinks && hamburger) {
    document.addEventListener("click", function(e) {
      // Check if menu is open and click is outside of nav-links and hamburger
      if (navLinks.classList.contains("show-navlinks")) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          // Close the menu
          navLinks.classList.remove("show-navlinks");
          hamburger.classList.remove("hamburger-off");
          hamburger.classList.add("hamburger-on");

          // Reset any divs that were hidden
          const div = document.getElementById("hideMe");
          const pic = document.getElementById("mainPic");
          if (div && pic) {
            div.style.display = "block";
            pic.style.position = "relative";
          }
        }
      }
    });

    // Prevent clicks inside the menu from closing it
    navLinks.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  }
});

// Enhanced scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const animateElements = document.querySelectorAll('.treatment-card, .law-header, .law-details, .section-title, .section-subtitle');

  animateElements.forEach((el, index) => {
    el.classList.add('animate-on-scroll');
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

//Kod för nav

const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger-on");

// const btns = document.querySelectorAll(".btn");

const div = document.getElementById("hideMe");

const pic = document.getElementById("mainPic");

const navLinks = document.querySelector(".nav-links");
let hamburgerOpen = false;

hamburger.addEventListener("click", function () {
  // Toggle menu visibility
  navLinks.classList.toggle("show-navlinks");
  hamburger.classList.toggle("hamburger-off");
  hamburger.classList.toggle("hamburger-on");

  // Update hamburger state
  hamburgerOpen = navLinks.classList.contains("show-navlinks");

  // Handle elements that exist on specific pages
  if (div && pic) {
    if (hamburgerOpen) {
      div.style.display = "none";
      pic.style.position = "static";
    } else {
      div.style.display = "block";
      pic.style.position = "relative";
    }
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





