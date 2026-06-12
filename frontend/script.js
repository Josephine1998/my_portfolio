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

  fetch("http://127.0.0.1:5000/api/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("carouselInner");

    container.innerHTML = data.map((project, index) => `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="d-flex justify-content-center">
          <div class="card project-card">
          <img src="${project.image}" class="card-img-top">

          <div class="card-body">
            <h5>${project.title}</h5>
            <p>${project.description}</p>

            <a href="${project.live}" target="_blank" class="btn btn-primary">
              Live
            </a>
          </div>
        </div>
        </div>
      </div>
    `).join("");
  });