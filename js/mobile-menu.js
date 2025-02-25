(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-header-link");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  for (let index = 0; index < mobileMenuLinks.length; index++) {
    mobileMenuLinks[index].addEventListener("click", toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();


const swiper = new Swiper('.hero-swiper', {
  loop: true,
  mousewheel: false,
  grabCursor: true,
  effect: 'cube',
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
});
