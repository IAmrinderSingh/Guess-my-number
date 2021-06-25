'use strict'
let guess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = (message) => {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const number = Number(document.querySelector('.guess').value);
        if (guess === number) {
            displaymessage('🎉Correct number...');
            document.querySelector('body').style.backgroundColor = '#00e673';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = guess;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }else if (!(number)) {
            displaymessage('⛔ No Number');
        }
        else if (!(guess === number)) {
            if (score > 1) {
                displaymessage(guess > number ? '📉Too Low' : '📈Too High');
                score--;
                document.querySelector('.score').textContent = score;
            }
        } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  })
/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1.2.3.4.Select the element with the 'again' class and attach a click event handler
In the handler function, restore initial values of the 'score' and
'secretNumber' variables
Restore the initial conditions of the message, number, score and guess input
fields
Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
    guess = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displaymessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

})