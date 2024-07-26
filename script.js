document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor','cursor1','cursor2', 'cursor3' , 'cursor4' ,'cursor5');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor1.style.left = `${e.clientX}px`;
    cursor1.style.top = `${e.clientY}px`;
    cursor2.style.left = `${e.clientX}px`;
    cursor2.style.top = `${e.clientY}px`;
    cursor3.style.left = `${e.clientX}px`;
    cursor3.style.top = `${e.clientY}px`;
    cursor4.style.left = `${e.clientX}px`;
    cursor4.style.top = `${e.clientY}px`;
    cursor5.style.left = `${e.clientX}px`;
    cursor5.style.top = `${e.clientY}px`;
});

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let colorIndex = 0;

setInterval(() => {
    const cursor = document.getElementById('cursor','cursor1','cursor2', 'cursor3' , 'cursor4' ,'cursor5');
    colorIndex = (colorIndex + 1) % colors.length;
    cursor.style.backgroundColor = colors[colorIndex];
    cursor1.style.backgroundColor = colors[colorIndex];
    cursor2.style.backgroundColor = colors[colorIndex];
    cursor3.style.backgroundColor = colors[colorIndex];
    cursor4.style.backgroundColor = colors[colorIndex];
    cursor5.style.backgroundColor = colors[colorIndex];
}, 2000);

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let gameActive = true;
    const gameState = ["", "", "", "", "", "", "", "", ""];

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleCellPlayed = (clickedCell, clickedCellIndex) => {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerText = currentPlayer;
    };

    const handlePlayerChange = () => {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    };

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        
        document.addEventListener("DOMContentLoaded", () => {
            const buttons = document.querySelectorAll(".button");
            const resetButton = document.getElementById("reset");
            let currentPlayer = "X";
            let gameActive = true;
            const gameState = ["", "", "", "", "", "", "", "", ""];
        
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
        
            const handleCellPlayed = (clickedCell, clickedCellIndex) => {
                gameState[clickedCellIndex] = currentPlayer;
                clickedCell.innerText = currentPlayer;
                clickedCell.style.color = currentPlayer === "X" ? "red" : "blue";
            };
        
            const handlePlayerChange = () => {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            };
        
            const handleResultValidation = () => {
                let roundWon = false;
                for (let i = 0; i < winningConditions.length; i++) {
                    const winCondition = winningConditions[i];
                    let a = gameState[winCondition[0]];
                    let b = gameState[winCondition[1]];
                    let c = gameState[winCondition[2]];
                    if (a === '' || b === '' || c === '') {
                        continue;
                    }
                    if (a === b && b === c) {
                        roundWon = true;
                        break;
                    }
                }
        
                if (roundWon) {
                    alert(`Player ${currentPlayer} has won!`);
                    gameActive = false;
                    return;
                }
        
                let roundDraw = !gameState.includes("");
                if (roundDraw) {
                    alert("Game is a draw!");
                    gameActive = false;
                    return;
                }
        
                handlePlayerChange();
            };
        
            const handleCellClick = (event) => {
                const clickedCell = event.target;
                const clickedCellIndex = Array.from(buttons).indexOf(clickedCell);
        
                if (gameState[clickedCellIndex] !== "" || !gameActive) {
                    return;
                }
        
                handleCellPlayed(clickedCell, clickedCellIndex);
                handleResultValidation();
            };
        
            const handleRestartGame = () => {
                currentPlayer = "X";
                gameActive = true;
                gameState.fill("");
                buttons.forEach(button => {
                    button.innerText = "";
                    button.style.color = "white"; // Reset color to default
                });
            };
        
            buttons.forEach(button => button.addEventListener("click", handleCellClick));
            resetButton.addEventListener("click", handleRestartGame);
        });
        
        if (roundWon) {
            alert(`Player ${currentPlayer} has won!`);
            gameActive = false;
            return;
        }

        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            alert("Game is a draw!");
            gameActive = false;
            return;
        }

        handlePlayerChange();
    };

    const handleCellClick = (event) => {
        const clickedCell = event.target;
        const clickedCellIndex = Array.from(buttons).indexOf(clickedCell);

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    };

    const handleRestartGame = () => {
        currentPlayer = "X";
        gameActive = true;
        gameState.fill("");
        buttons.forEach(button => button.innerText = "");
    };

    buttons.forEach(button => button.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", handleRestartGame);

});

