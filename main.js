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

function playRound(){
    jugadorChoise= getJugadorChoice
    computerChoise= getcomputerChoice
}


