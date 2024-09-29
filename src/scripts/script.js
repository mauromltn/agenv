window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY; // Ottieni la posizione di scroll
  const textElements = document.querySelectorAll('.text');
  const islandElement = document.querySelector('.caption');
  const curveElement = document.querySelector('.curve');

  textElements.forEach((text) => {
    const textOffset = scrollPosition * 2.5;
    text.style.transform = `translateY(-${textOffset}px)`; // Muovi il testo verso l'alto
  });

  const islandOffset = scrollPosition * 1.5;
  const maxIslandOffset = 700; // Imposta un limite massimo per l'offset
  if (islandOffset > maxIslandOffset) {
    islandOffset = maxIslandOffset;
  }
  const scale = Math.max(1 - (scrollPosition * 0.001), 0); // Modifica il fattore per cambiare l'effetto e imposta un limite minimo
  islandElement.style.transform = `translateY(${islandOffset}px) scale(${scale})`;
  
  const curveOffset = scrollPosition * 2;
  const maxCurveScale = 2; // Imposta un limite massimo per la scala
  const curveScale = Math.min(1 + (curveOffset * 0.001), maxCurveScale);
  curveElement.style.transform = `scale(${curveScale})`;
});

// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});