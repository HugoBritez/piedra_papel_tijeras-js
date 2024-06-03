console.log('¡Empecemos a jugar!');

let puntosJugador = 0;
let puntosComputadora = 0;
let rounds = 1;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'piedra';
  } else if (choice === 1) {
    return 'papel';
  } else {
    return 'tijeras';
  }
}

function getJugadorChoice() {
  let jugada = prompt('Elige piedra, papel o tijeras:');
  let jugadaLowerCase = jugada.toLowerCase();
  return jugadaLowerCase;
}

function playRound() {
  let jugadorChoice = getJugadorChoice();
  let computerChoice = getComputerChoice();
  console.log(`Jugador elige: ${jugadorChoice}`);
  console.log(`Computadora elige: ${computerChoice}`);
  
  if (jugadorChoice === computerChoice) {
    console.log('¡Ha habido un empate!');
  } else if (jugadorChoice === 'piedra' && computerChoice === 'papel') {
    puntosComputadora++;
    console.log('Computadora gana esta ronda!');
  } else if (jugadorChoice === 'piedra' && computerChoice === 'tijeras') {
    puntosJugador++;
    console.log('Jugador gana esta ronda!');
  } else if (jugadorChoice === 'papel' && computerChoice === 'tijeras') {
    puntosComputadora++;
    console.log('Computadora gana esta ronda!');
  } else if (jugadorChoice === 'papel' && computerChoice === 'piedra') {
    puntosJugador++;
    console.log('Jugador gana esta ronda!');
  } else if (jugadorChoice === 'tijeras' && computerChoice === 'piedra') {
    puntosComputadora++;
    console.log('Computadora gana esta ronda!');
  } else if (jugadorChoice === 'tijeras' && computerChoice === 'papel') {
    puntosJugador++;
    console.log('Jugador gana esta ronda!');
  } else {
    console.log('Elección no válida. Por favor, elige piedra, papel o tijeras.');
  }
  
  console.log(`Puntuación: Jugador ${puntosJugador} - Computadora ${puntosComputadora}`);
}


//*while(rounds<=5){
//    playRound();
//    rounds++
//}

console.log('\nJuego terminado');
if (puntosJugador > puntosComputadora) {
  console.log('¡Jugador gana el juego!');
} else if (puntosJugador < puntosComputadora) {
  console.log('Computadora gana el juego!');
} else {
  console.log('¡El juego ha terminado en empate!');
}