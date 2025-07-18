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

// Animation au scroll avec IntersectionObserver (plus performant)
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animation une seule fois
      }
    });
  },
  {
    threshold: 0.1
  }
);

// Observer tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
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

function toggleSection(sectionId) {
  const content = document.getElementById(`content-${sectionId}`);
  const icon = document.getElementById(`toggle-icon-${sectionId}`);
  
  if (content.style.display === "none") {
    content.style.display = "block";
    icon.textContent = "👁"; // œil ouvert
  } else {
    content.style.display = "none";
    icon.textContent = "🙈"; // œil fermé
  }
}

