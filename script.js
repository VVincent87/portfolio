// Variable du bouton.
const scrollToTopButton = document.getElementById('js-top');

// Fonction pour afficher le bouton de retour en haut de page lorsque la fenêtre descend.
const scrollFunc = () => {
  // Récupération de la valeur de scroll actuelle
  let y = window.scrollY;
  
  // Définition d'une classe pour afficher le bouton si la valeur de scroll est supérieure à celle définie
  if (y > 300) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Création d'une variable contenant le nombre de pixels etre la location actuelle et le haut de page
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Si ce nombre est supérieur à 0, on retourne en haut de la page
  // Animation ralentie du scroll avec RequestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // Le scroll a beosin de coordonnées X et Y
    // Changer le diviseur ralentit ou accélère la transition
    window.scrollTo(0, c - c / 10);
  }
};

// Appel de la fonction de retour en haut quand le bouton est cliqué
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}