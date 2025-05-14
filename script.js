let index = 0;

function moveSlide(step) {
  const carousel = document.getElementById("carousel");
  const total = carousel.children.length;
  index = (index + step + total) % total;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Animation on scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
