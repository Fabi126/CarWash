const navSlide = () => {
  const burger = documet.querySelector(".burger");
  const nav = documet.querySelector(".navbar ul li");
  const navLinks = documet.querySelectorAll(".navbar li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("navbar-active");
    navbar.forEach((link, index) => {
      link.style.animation =
        "navbarFade 0.5s ease forwards ${index / 7 + 0.3}s";
    });
  });
};
navSlide();
