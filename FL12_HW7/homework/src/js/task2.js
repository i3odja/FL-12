let min = 0;
let max = 8;
let promptString = '';
let confirmString = '';
let congratulationString = '';
let maxVal = 0;
const COUNT_ATTEMPS = 3;
const FIRST_STEP_ATTEMPS = 3;
const SECOND_STEP_ATTEMPS = 2;
const THIRD_STEP_ATTEMPS = 1;
const FIRST_STEP_PRIZE = 100;
const SECOND_STEP_PRIZE = 50;
const THIRD_STEP_PRIZE = 25;
let currentAttempt = 3;
let koefTwo = 2;
let randomKoef = 0;
let starGame = '';
let rouletteNumber = 0;
let userNumber = 0;
let koef = 0;
let currentPrize = 0;
let totalPrize = 0;

starGame = confirm('Do you want to play game?');
if ( !starGame ) {
    alert('You did not become a billionare, but can.');
} else {
    koef++;
    rouletteNumber = parseInt(Math.floor(Math.random() * (max + koefTwo * randomKoef ) - min + 1) + min, 10);
    for ( currentAttempt; currentAttempt >= 0; currentAttempt-- ) {
        if ( currentAttempt === FIRST_STEP_ATTEMPS ) {
            currentPrize = FIRST_STEP_PRIZE * koef; 
            promptString = 'Choose a roulette pocket number from ' + min + ' to ' + (max + koefTwo * randomKoef);
            promptString += '\r\nAttempts left ' + currentAttempt;
            promptString += ' \r\nTotal prize: ' + totalPrize;
            promptString += '$ \r\nPossible prize  on current attempt: ' + currentPrize + '$ \r\n';
            userNumber = parseInt(prompt(promptString, ''), 10);
            if ( userNumber === rouletteNumber ) {
                totalPrize += currentPrize;
                confirmString = 'Congratulation, you won! Your prize is: ' + totalPrize;
                confirmString += '$. \r\n\r\nDo you want to continue?';
                if ( confirm( confirmString )) {
                    currentAttempt = COUNT_ATTEMPS;
                    currentAttempt += 1;
                    koef++;
                    randomKoef += koefTwo;
                    maxVal = max + koefTwo * randomKoef;
                    rouletteNumber = parseInt(Math.floor(Math.random() * (maxVal - min + 1) + min), 10);
                    continue;
                }
            } else if ( !userNumber ) {
                continue;
            }
        } else if ( currentAttempt === SECOND_STEP_ATTEMPS ) {
            currentPrize = SECOND_STEP_PRIZE * koef;
            promptString = 'Choose a roulette pocket number from ' + min + ' to ' + (max + koefTwo * randomKoef);
            promptString += '\r\nAttempts left ' + currentAttempt;
            promptString += ' \r\nTotal prize: ' + totalPrize;
            promptString += '$ \r\nPossible prize  on current attempt: ' + currentPrize + '$ \r\n';
            userNumber = parseInt(prompt(promptString, ''), 10);
            if ( userNumber === rouletteNumber ) {
                totalPrize += currentPrize;
                confirmString = 'Congratulation, you won! Your prize is: ' + totalPrize;
                confirmString += '$. \r\n\r\nDo you want to continue?';
                if ( confirm( confirmString ) ) {
                    currentAttempt = COUNT_ATTEMPS;
                    currentAttempt += 1;
                    koef++;
                    randomKoef += koefTwo;
                    maxVal = max + koefTwo * randomKoef;
                    rouletteNumber = parseInt(Math.floor(Math.random() * (maxVal - min + 1) + min), 10);
                    continue;
                }
            } else if ( !userNumber ) {
                continue;
            }
        } else if ( currentAttempt === THIRD_STEP_ATTEMPS ) {
            currentPrize = THIRD_STEP_PRIZE * koef;
            promptString = 'Choose a roulette pocket number from ' + min + ' to ' + (max + koefTwo * randomKoef);
            promptString += '\r\nAttempts left ' + currentAttempt;
            promptString += ' \r\nTotal prize: ' + totalPrize;
            promptString += '$ \r\nPossible prize  on current attempt: ' + currentPrize + '$ \r\n';
            userNumber = parseInt(prompt(promptString, ''), 10);
            if ( userNumber === rouletteNumber ) {
                currentAttempt = COUNT_ATTEMPS;
                totalPrize += currentPrize;
                confirmString = 'Congratulation, you won! Your prize is: ' + totalPrize;
                confirmString += '$. \r\n\r\nDo you want to continue?';
                if ( confirm( confirmString ) ) {
                    currentAttempt = COUNT_ATTEMPS;
                    currentAttempt += 1;
                    koef++;
                    randomKoef += koefTwo;
                    maxVal = max + koefTwo * randomKoef;
                    rouletteNumber = parseInt(Math.floor(Math.random() * (maxVal - min + 1) + min), 10);
                    continue;
                }
            } else if ( !userNumber ) {
                continue;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            if ( !confirm('Do you want to play again?') ) {
                alert('You did not become a billionare, but can.');
                break;
            } else {
                totalPrize = 0;
                currentAttempt = COUNT_ATTEMPS;
                currentAttempt += 1;
                koef = 1;
                randomKoef = 0;
                maxVal = max + koefTwo * randomKoef;
                rouletteNumber = parseInt(Math.floor(Math.random() * (maxVal - min + 1) + min), 10);
                continue;
            }
        }
    }
}