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

// Gestion du formulaire d'inscription
// Sélectionne le formulaire sur la page
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi classique du formulaire

  // Récupère les valeurs des champs
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const consent = document.getElementById('consent').checked;

  let valid = true;   // Variable pour savoir si le formulaire est valide
  let message = '';   // Message à afficher en cas d'erreur

  // Vérifie si le prénom est rempli
  if (!firstname) { valid = false; message += 'Prénom requis.<br>'; }

  // Vérifie si le nom est rempli
  if (!lastname) { valid = false; message += 'Nom requis.<br>'; }

  // Vérifie si l'email est au bon format
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    valid = false;
    message += 'Email invalide.<br>';
  }

  // Vérifie si la case consentement est cochée
  if (!consent) { valid = false; message += 'Veuillez accepter la politique de confidentialité.<br>'; }

  // Sélectionne la div pour afficher le message
  const msgDiv = document.getElementById('form-message');

  if (valid) {
    // Si tout est OK, affiche le message de confirmation 
    msgDiv.style.backgroundColor = '#EA516F'; // Change la couleur de fond
    msgDiv.innerHTML = 'Merci de rejoindre la résonnance !';
    msgDiv.style.display = 'block';//Affiche le message
  } else {
    // Sinon, affiche les erreurs en rouge
    msgDiv.style.color = 'red';
    msgDiv.innerHTML = message;
    msgDiv.style.display = 'block';
      }
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
<
// Gestion de la FAQ
document.querySelectorAll('.faq-question').forEach(btn => { // Sélectionne tous les boutons de la FAQ
  btn.addEventListener('click', function() { // Ajoute un écouteur d'événement pour chaque bouton
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  });
});

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('site-progress-bar').style.width = scrolled + '%';
});
