window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"]; // palos
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]; //numeros

  // Función para obtener un valor aleatorio de un array

  let paloRandom = palos[Math.floor(Math.random() * palos.length)];
  let numeroRandom = numeros[Math.floor(Math.random() * numeros.length)];

  let palo1 = document.getElementById("palo1");
  palo1.innerText = paloRandom;

  let numero = document.getElementById("numero");
  numero.innerText = numeroRandom;

  let palo2 = document.getElementById("palo2");
  palo2.innerText = paloRandom;
};
