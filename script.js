/*Barra navegacion*/
let sobre = document.getElementById("sobre");
let tipos = document.getElementById("tipos");
let dropS = document.getElementById("dropS");
let dropT = document.getElementById("dropT");

sobre.addEventListener('mouseenter', function () {
    dropS.classList.add('mostrar');
});
sobre.addEventListener('mouseleave', function () {
    dropS.classList.remove('mostrar');
});

tipos.addEventListener('mouseenter', function () {
    dropT.classList.add('mostrar');
});
tipos.addEventListener('mouseleave', function () {
    dropT.classList.remove('mostrar');
});


/*Tabla Inicio*/
const cuadros = document.querySelectorAll('.cuadro');
cuadros.forEach(cuadro => {
  cuadro.addEventListener('click', () => {
    if (cuadro.classList.contains('activo')) {
      cuadro.classList.remove('activo');
    } else {
      cuadros.forEach(c => c.classList.remove('activo'));
      cuadro.classList.add('activo');
    }
  });
});


/*Circulo cursor*/
const tituloBlanco = document.querySelector('.titulo-blanco');

document.querySelector('.hero').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const offset = 200;
  tituloBlanco.style.maskPosition = `${x - offset}px ${y - offset}px`;
  tituloBlanco.style.webkitMaskPosition = `${x - offset}px ${y - offset}px`;
});

hero.addEventListener('mouseleave', () => {
    tituloBlanco.style.maskPosition = `-9999px -9999px`;
    tituloBlanco.style.webkitMaskPosition = `-9999px -9999px`;
  });