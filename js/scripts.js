document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, span");
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(/\./g, '<span class="fallback-font">.</span>');
    p.innerHTML = p.innerHTML.replace(/\,/g, '<span class="fallback-font">,</span>');
    p.innerHTML = p.innerHTML.replace(/([0-9.]+)/g, '<span class="fallback-font">$1</span>');
  });

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

document.getElementById('form-contacto').addEventListener('submit', function(event) {
  (function(){
    emailjs.init("eqN-WWRrQCR82RV2E"); // Reemplaza con tu User ID de EmailJS
  })();

  event.preventDefault(); // Evita el envío del formulario por defecto

  // Validación del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Envío del formulario usando EmailJS
  emailjs.sendForm('contact_service', 'contact_form', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Mensaje enviado con éxito!');
      document.getElementById('form-contacto').reset(); // Limpia el formulario después de enviarlo
    }, function(error) {
      console.log('FAILED...', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});
