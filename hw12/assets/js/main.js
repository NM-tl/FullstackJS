document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    
    if (board) {
        const leftColumn = board.querySelector('.left');
        const rightColumn = board.querySelector('.right');
        const topRow = board.querySelector('.top');
        const bottomRow = board.querySelector('.bottom');
        const field = board.querySelector('.field');
        
        /* Values */
        const cells = 64;
        const lettersRegex = /[A-H]/;

        /* Render */
        for (let i = 8; i >= 1; i--) {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('cell');
            numberDiv.textContent = i;
            leftColumn.appendChild(numberDiv.cloneNode(true));
            rightColumn.appendChild(numberDiv.cloneNode(true));
        }

        for (let i = 0; i < 8; i++) {
            const letterDiv = document.createElement('div');
            letterDiv.classList.add('cell');

            if (lettersRegex.test(String.fromCharCode(65 + i))) {
                letterDiv.textContent = String.fromCharCode(65 + i);
            }

            topRow.appendChild(letterDiv.cloneNode(true));
            bottomRow.appendChild(letterDiv.cloneNode(true));
        }

        for (let i = 0; i < cells; i++) {
            const div = document.createElement('div');
            field.appendChild(div);

            if (i % 16 < 8) {
                div.classList.add(i % 2 === 0 ? 'black' : 'white');
            } else {
                div.classList.add(i % 2 === 0 ? 'white' : 'black');
            }
        }
    }
});
