document.addEventListener('DOMContentLoaded', () => {
  const carruseles = document.querySelectorAll('.carrusel');

  carruseles.forEach(carrusel => {
    const slides = carrusel.querySelectorAll('.slide');
    let index = 0;

    // Función para mostrar el slide actual
    function mostrarSlide() {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          slide.classList.remove('inactive');
        } else {
          slide.classList.add('inactive');
          slide.classList.remove('active');
        }
      });
    }

    // Cambiar de imagen cada 3 segundos
    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide();
    }, 5000);

    // Mostrar el primer slide al cargar la página
    mostrarSlide();
  });
});
