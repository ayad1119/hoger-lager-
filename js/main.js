let countdown = setInterval(() => {
    if (gameTime > 0) {
        gameTime -= 1;
        timer.innerText = mmSS(gameTime);
    } else {
        clearInterval(countdown);
        lowerButton.disabled = true;
        higherButton.disabled = true;
        console.log("Game Over");
    }
}, 1000);