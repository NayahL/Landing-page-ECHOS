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

//Slider pour la bannière




  const carousel = document.getElementById("spotify-carousel");
  const toggleBtn = document.getElementById("toggleScroll");

  // Clone les éléments pour l'effet infini
  const items = [...carousel.children];
  items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let isPaused = false;

  toggleBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    carousel.style.animationPlayState = isPaused ? "paused" : "running";
    toggleBtn.textContent = isPaused ? "▶ Reprendre" : "⏸ Pause";
  });


// Bouton retour en haut
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
