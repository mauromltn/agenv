window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Ottieni la posizione di scroll
    const textElements = document.querySelectorAll('.text');

    // Calcola lo spostamento del testo in base alla posizione di scroll
    textElements.forEach((text) => {
      const offset = scrollPosition * 0.5; // Modifica il fattore per cambiare l'effetto
      text.style.transform = `translateY(-${offset}px)`; // Muovi il testo verso l'alto
    });
  });