window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Ottieni la posizione di scroll
  const textElements = document.querySelectorAll('.text');
  const islandElement = document.querySelector('.caption');

  // Calcola lo spostamento del testo in base alla posizione di scroll
  textElements.forEach((text) => {
    const textOffset = scrollPosition * 1; // Modifica il fattore per cambiare l'effetto
    text.style.transform = `translateY(-${textOffset}px)`; // Muovi il testo verso l'alto
  });

  // Limita lo spostamento dell'elemento .caption
  const maxScroll = 800; // Imposta il limite massimo di scroll
  const islandOffset = Math.min(scrollPosition * 1.5, maxScroll); // Limita lo spostamento massimo
  islandElement.style.transform = `translateY(${islandOffset}px)`; // Muovi l'elemento verso il basso senza superare il limite

  // Calcola la scala in base alla posizione di scroll
  const scale = 1 - (scrollPosition * 0.001); // Modifica il fattore per cambiare l'effetto
  islandElement.style.transform += ` scale(${scale})`; // Riduci l'elemento gradualmente
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  })