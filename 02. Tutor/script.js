// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-mobile-icon");
  const mobileMenu = document.querySelector(".navbar-mobile-list");
  document.addEventListener("click", function (event) {
    if (
      !toggleButton.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      mobileMenu.classList.remove("active");
    }
  });
  toggleButton.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("active");
  });
});

// Fix Navbar at the top
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
