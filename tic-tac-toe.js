window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    let current = 'X';

    squares.forEach(square => {
        square.classList.add('square');
        square.addEventListener('click', () => {
            if (square.textContent === '' && !status.classList.contains('you-won')) {
                square.textContent = current;
                square.classList.add(current);
                if (checkWin()) {
                    status.textContent = `Congratulations! ${current} is the Winner!`;
                    status.classList.add('you-won');
                } else {
                    current = current === 'X' ? 'O' : 'X';
                }
            }
        });
        square.addEventListener('mouseover', () => {
            if (square.textContent === '') square.classList.add('hover');
        });
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });

    newGameButton.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';
            square.className = 'square';
        });
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.className = '';
        current = 'X';
    });

    function checkWin() {
        const combos = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8],
            [0, 3, 4],[1, 4, 7],[2, 5, 8],
            [0, 4, 8],[2, 4, 6]
        ];
        return combos.some(([a, b, c]) => {
            return squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent;
        });
    }
});



