const form = document.getElementById('formulario');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Mostrar spinner
  spinner.style.display = 'block';

  // Simular envío con un timeout
  setTimeout(() => {
    spinner.style.display = 'none';
    modal.style.display = 'flex';
    form.reset();
  }, 2000); // simula 2 segundos de espera
});

function cerrarModal() {
  modal.style.display = 'none';
}

const cerrarBtn = document.getElementById('cerrarModalBtn');
cerrarBtn.addEventListener('click', cerrarModal);
