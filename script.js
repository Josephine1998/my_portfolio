window.addEventListener("scroll", function() {
  let nav = document.querySelector(".custom-nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

  const nav = document.querySelector(".custom-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 100;

      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // RUN ON PAGE LOAD TOO 👇 (THIS IS WHAT YOU WERE MISSING)
  revealOnScroll();