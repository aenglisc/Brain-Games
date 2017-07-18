// eslint-disable-next-line
import readlineSync from 'readline-sync';
/*
import even from './even-logic';
*/
export const askName = () => {
  const playerName = readlineSync.question('\nMay I know your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandomInt = () => Math.floor(Math.random() * (200 - 1)) + 1;

export const evenGameRound = (playerName, round, correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const currentNumber = getRandomInt();
  const numberIsEven = currentNumber % 2 === 0;
  const expectedAnswer = numberIsEven ? 'yes' : 'no';
  const questionText = `\nRound ${round}: Is ${currentNumber} even? `;
  const answer = readlineSync.question(questionText);

  if (answer === expectedAnswer) {
    console.log('Correct!');
    evenGameRound(playerName, round + 1, correctAnswers + 1);
    return;
  }
  console.log(`Sorry, "${answer}" is the wrong answer. :(`);
  console.log(`The correct answer is "${expectedAnswer}".`);
  console.log(`Let's try again, ${playerName}!`);
};
