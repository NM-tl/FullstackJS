document.addEventListener('DOMContentLoaded', () => {
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    function renderTimeline() {
        const timelineElement = document.querySelector('.leapYearsTimeline');

        for (let year = 1900; year <= 2100; year++) {
            const leapYearElement = `
                <li>
                    <div class="timeline-start">${year}</div>
                    <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <div class="timeline-end timeline-box">leap year</div>
                    <hr/>
                </li>`;
            const simpleYearElement = `
                <li>
                    <hr/>
                    <div class="timeline-start">${year}</div>
                    <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />
                    </svg>                                                      
                    </div>
                    <hr/>
                </li>`;
            timelineElement.innerHTML += isLeapYear(year) ? leapYearElement : simpleYearElement;
        }
    }
    
    renderTimeline();
});

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        const enter = confirm("Want to play roulette?");

        if (enter) {
            let budget = parseInt(localStorage.getItem('budget')) || 0;
            console.log('Initial budget:', budget);

            budget && !isNaN(budget) && budget >= 50 ?
            alert(`Your budget from the previous game is ${budget}`) :
            null;

            while (!budget || isNaN(budget) || budget < 50) {
                const initialBudget = prompt("Enter your initial budget (minimum 50):");
                
                if (initialBudget === null || !initialBudget || isNaN(initialBudget) || initialBudget < 50) {
                    alert("Please enter a valid initial budget (minimum 50).");
                } else {
                    budget = Number(initialBudget);
                }
            }

            console.log('Updated budget after initial input:', budget);

            do {
                bid = prompt("Type your bid (minimum 50):");
            } while (isNaN(bid) || bid < 50);

            do {
                color = prompt("Choose color: red or black").toLowerCase();
            } while (color !== 'red' && color !== 'black' && !color);

            // const getRedOrBlack = () => ['red', 'black'][Math.floor(Math.random() * 2)];
            // const BetColor = getRedOrBlack();
            const BetColor = "red";

            alert(`Random color is: ${BetColor}`);

            if (color === BetColor) {
                budget += Number(bid) * 2;
                alert(`Congratulations! You guessed the color. Your budget is now ${budget}`);
            } else {
                budget -= Number(bid);
                alert(`Sorry, the color did not match. Your budget is now ${budget}`);
            }

            localStorage.setItem('budget', budget.toString());
            console.log('Updated budget after the game:', budget);

            if (budget >= 2000) {
                alert("You won! Game over.");
                localStorage.removeItem('budget');
            } else if (budget === 0) {
                alert("You lost. Game over.");
                localStorage.removeItem('budget');
            }
        } else {
            alert("Okay, maybe next time!");
        }
    });
});
