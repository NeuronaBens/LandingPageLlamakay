// Obtener el elemento de la sección a la que se quiere ir
const section = document.getElementById('especialistas');

// Esperar un segundo antes de desplazarse a la sección
setTimeout(() => {
  section.scrollIntoView({ behavior: 'smooth' });
}, 2000);
