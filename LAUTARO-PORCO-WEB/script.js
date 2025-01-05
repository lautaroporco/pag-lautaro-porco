function actualizarReloj () {

const fechaActual = new Date();

let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

// me aseguro que haya 2 digitos en cada uno
horas = (horas < 10 ? "0" + horas : horas);
minutos = (minutos < 10 ? "0" + minutos : minutos);
segundos = (segundos < 10 ? "0" + segundos : segundos);

const horaFormateada = `${horas}:${minutos}:${segundos}`;
document.getElementById('hora').textContent = horaFormateada; 

//obtengo la fecha
const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const diaSemana = diasSemana[fechaActual.getDay()];
const dia = fechaActual.getDate();
const mes = meses[fechaActual.getMonth()];
const año = fechaActual.getFullYear();

// mostramos en el formato que queremos
const fechaFormateada = `${diaSemana}, ${dia} ${mes} ${año}`;
document.getElementById('fecha').textContent = fechaFormateada;
} 

setInterval (actualizarReloj, 1000);

actualizarReloj();



// // Seleccionar todos los botones que activan los modales
// const cvMiniaturas = document.querySelectorAll('.cv-miniatura');

// // Seleccionar todos los modales
// const modales = document.querySelectorAll('.modal');

// // Seleccionar todos los botones de cierre
// const botonesCerrar = document.querySelectorAll('.close');

// // Función para abrir un modal
// cvMiniaturas.forEach((miniatura) => {
//   miniatura.addEventListener('click', () => {
//     const modalId = miniatura.getAttribute('data-modal');
//     const modal = document.getElementById(modalId);
//     if (modal) {
//       modal.style.display = 'block';
//     }
//   });
// });

// // Función para cerrar un modal
// botonesCerrar.forEach((boton) => {
//   boton.addEventListener('click', () => {
//     const modal = boton.closest('.modal');
//     if (modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

// // Cerrar el modal cuando se hace clic fuera de su contenido
// window.addEventListener('click', (event) => {
//   modales.forEach((modal) => {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

document.querySelectorAll('.cv-miniatura').forEach((btn, index) => {
  const modal = document.querySelectorAll('.modal')[index];
  const backdrop = document.querySelector('.modal-backdrop');
  const closeBtn = modal.querySelector('.close');

  btn.addEventListener('click', () => {
      modal.style.display = 'block';
      backdrop.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      backdrop.style.display = 'none';
  });

  backdrop.addEventListener('click', () => {
      modal.style.display = 'none';
      backdrop.style.display = 'none';
  });
});



// Contador de visitas

// Actualizar contador de visitas
function actualizarContador() {
  let contadorVisitas = localStorage.getItem('contadorVisitas');
  // Si no existe, inicializarlo en 0
  if (!contadorVisitas) {
      contadorVisitas = 0;
  } else {
      contadorVisitas = parseInt(contadorVisitas, 10);
  }
  // Incrementar el contador
  contadorVisitas++;
  // Actualizar el valor en localStorage
  localStorage.setItem('contadorVisitas', contadorVisitas);
  // Mostrar el contador en el DOM
  document.getElementById('contador').textContent = `Visitas: ${contadorVisitas}`;
};

actualizarContador();
