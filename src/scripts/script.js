window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Ottieni la posizione di scroll
  const textElements = document.querySelectorAll('.text');
  const islandElement = document.querySelector('.caption');

  // Calcola lo spostamento del testo in base alla posizione di scroll
  textElements.forEach((text) => {
    const offset = scrollPosition * 1.5; // Modifica il fattore per cambiare l'effetto
    text.style.transform = `translateY(-${offset}px)`; // Muovi il testo verso l'alto
  });

  // Sposta l'elemento .island sotto
  const isolaOffset = scrollPosition * 1.5; // Modifica il fattore per cambiare l'effetto
  islandElement.style.transform = `translateY(+${isolaOffset}px)`; // Muovi l'elemento verso il basso
  // Calcola la scala in base alla posizione di scroll
  const scale = 1 - (scrollPosition * 0.001); // Modifica il fattore per cambiare l'effetto
  islandElement.style.transform += ` scale(${scale})`; // Riduci l'elemento gradualmente
});
