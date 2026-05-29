window.addEventListener("scroll", function() {
  let nav = document.querySelector(".custom-nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// const elements = document.querySelectorAll(".reveal");

//  window.addEventListener("scroll", () => {
//   elements.forEach(el => {
//     const top = el.getBoundingClientRect().top;
//     const trigger = window.innerHeight * 0.85;

//     if (top < trigger) {
//       el.classList.add("active");
//     }
//   });
// });

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