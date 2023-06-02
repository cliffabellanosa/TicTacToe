let currentPlayer = "X";
let gameEnded = false;
const cells = Array.from(document.getElementsByClassName("cell"));

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (gameEnded || cells[cellIndex].textContent !== "") return;

    cells[cellIndex].textContent = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);

    if (checkWin(currentPlayer)) {
        gameEnded = true;
        alert(`Player ${currentPlayer} wins!`);
        return;
    }

    if (checkDraw()) {
        gameEnded = true;
        alert("It's a draw!");
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(player) {
    return winningCombos.some(combination => {
        return combination.every(index => cells[index].textContent === player);
    });
}

function checkDraw() {
    return cells.every(cell => cell.textContent !== "");
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("X", "O");
    });

    currentPlayer = "X";
    gameEnded = false;
}
