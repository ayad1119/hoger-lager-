document.addEventListener("DOMContentLoaded", function() {
    let player1Score = 0;
    let player2Score = 0;
    let isPlayer1Turn = true;
    let timer;
    let seconds = 0;
    const gameDuration = 30; 

    const player1Button = document.querySelector(".spel1");
    const player2Button = document.querySelector(".spel2");
    const timeBar = document.querySelector(".time-bar");
    const hogerButton = document.getElementById("hoger");
    const lagerButton = document.getElementById("lager");
    const startButton = document.getElementById("start");

   
    function updateTime() {
        seconds++;
        let minutes = Math.floor(seconds / 60);
        let displaySeconds = seconds % 60;
        timeBar.textContent = `${String(minutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;

        
        if (seconds >= gameDuration) {
            clearInterval(timer); 
            declareWinner(); 
        }
    }

    
    function declareWinner() {
        let resultMessage;
        if (player1Score > player2Score) {
            resultMessage = "Player 1 wins!";
        } else if (player2Score > player1Score) {
            resultMessage = "Player 2 wins!";
        } else {
            resultMessage = "It's a tie!";
        }
        alert(`Time's up! Final Scores:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}\n${resultMessage}`);
    }

   
    startButton.addEventListener("click", function() {
        player1Score = 0;
        player2Score = 0;
        seconds = 0;
        timeBar.textContent = "00:00";
        player1Button.textContent = "Player 1: 0";
        player2Button.textContent = "Player 2: 0";

        
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(updateTime, 1000); 
    });

    
    function updateScore() {
        const scoreChange = Math.floor(Math.random() * 2) + 1; 

        if (isPlayer1Turn) {
            player1Score += scoreChange;
            player1Button.textContent = `Player 1: ${player1Score}`;
        } else {
            player2Score += scoreChange;
            player2Button.textContent = `Player 2: ${player2Score}`;
        }

        isPlayer1Turn = !isPlayer1Turn; 
    }

    
    hogerButton.addEventListener("click", updateScore);
    lagerButton.addEventListener("click", updateScore);
});

