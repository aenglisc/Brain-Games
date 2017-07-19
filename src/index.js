// eslint-disable-next-line
import readlineSync from 'readline-sync';
// import getRandomInt from './getRandomInt';

const BR = '\n';
/*
deprecated
export const askName = () => {
  const playerName = readlineSync.question(`${BR}May I know your name? `);
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
*/
export const play = (game, playerName = null, round = 1, correctAnswers = 0) => {
  if (!playerName) {
    // ask for a name
    game.runGreetings();
    const newName = readlineSync.question(`${BR}May I know your name? `);
    play(game, newName, round, correctAnswers);
  } else {
    if (round === 1) {
      // greet the player
      console.log(`Hello, ${playerName}!`);
    }
    if (game.playable) {
      // continue if a game has a description
      // quit if no description is present
      if (correctAnswers === 3) {
        // finish the game after 3 correct answers
        console.log(`${BR}Congratulations, ${playerName}!${BR}`);
      } else {
        // play round
        const questionText = `${BR}Round ${round}: ${game.getQuestion()}`;
        const answer = readlineSync.question(questionText);
        const expectedAnswer = game.getAnswer();
        if (answer === expectedAnswer) {
          // callback if the answer is correct
          console.log('Correct!');
          play(game, playerName, round + 1, correctAnswers + 1);
        } else {
          // quit if the answer is wrong
          console.log(`Sorry, "${answer}" is the wrong answer. :(`);
          console.log(`The correct answer is "${expectedAnswer}".`);
          console.log(`${BR}Let's try again, ${playerName}!${BR}`);
        }
      }
    }
  }
};


export default play;
