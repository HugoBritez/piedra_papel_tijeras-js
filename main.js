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

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    console.log(`Jugador elige: ${playerSelection}`);
    console.log(`Computadora elige: ${computerChoice}`);
    
    let resultMessage = '';
    if (playerSelection === computerChoice) {
        resultMessage = '¡Ha habido un empate!';
    } else if (playerSelection === 'piedra' && computerChoice === 'papel' ||
               playerSelection === 'papel' && computerChoice === 'tijeras' ||
               playerSelection === 'tijeras' && computerChoice === 'piedra') {
        puntosComputadora++;
        resultMessage = 'Computadora gana esta ronda!';
    } else if (playerSelection === 'piedra' && computerChoice === 'tijeras' ||
               playerSelection === 'papel' && computerChoice === 'piedra' ||
               playerSelection === 'tijeras' && computerChoice === 'papel') {
        puntosJugador++;
        resultMessage = 'Jugador gana esta ronda!';
    } else {
        resultMessage = 'Elección no válida. Por favor, elige piedra, papel o tijeras.';
    }
    
    console.log(resultMessage);
    console.log(`Puntuación: Jugador ${puntosJugador} - Computadora ${puntosComputadora}`);

    document.getElementById('result').textContent = resultMessage;
    document.getElementById('score').textContent = `Puntuación: Jugador ${puntosJugador} - Computadora ${puntosComputadora}`;

    rounds++;
    if (rounds > 5) {
        endGame();
    }
}

function endGame() {
    let finalMessage = '\nJuego terminado\n';
    if (puntosJugador > puntosComputadora) {
        finalMessage += '¡Jugador gana el juego!';
    } else if (puntosJugador < puntosComputadora) {
        finalMessage += 'Computadora gana el juego!';
    } else {
        finalMessage += '¡El juego ha terminado en empate!';
    }
    console.log(finalMessage);
    document.getElementById('result').textContent = finalMessage;

    // Disable buttons after the game ends
    document.getElementById('piedra').disabled = true;
    document.getElementById('papel').disabled = true;
    document.getElementById('tijeras').disabled = true;
}

// Add event listeners to the buttons
document.getElementById('piedra').addEventListener('click', function() {
    playRound('piedra');
});
document.getElementById('papel').addEventListener('click', function() {
    playRound('papel');
});
document.getElementById('tijeras').addEventListener('click', function() {
    playRound('tijeras');
});
