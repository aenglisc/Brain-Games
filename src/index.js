// eslint-disable-next-line
import readlineSync from 'readline-sync';

export const askName = () => {
  const playerName = readlineSync.question('\nMay I know your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandomInt = () => {
  return Math.floor(Math.random() * (200 - 1)) + 1;
}

export const evenGameRound = (playerName, round, correctAnswers) => {
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const currentNumber = getRandomInt();
  const numberIsEven = currentNumber % 2 === 0 ? true : false;
  const expectedAnswer = numberIsEven ? 'yes' : 'no';
  const answer = readlineSync.question(`Round ${round}: Is ${currentNumber} even? `);

  if (answer === expectedAnswer) {
    console.log('Correct!');
    return evenGameRound(playerName, round + 1, correctAnswers + 1);
  } else {
    console.log(`Sorry, "${answer}" is the wrong answer. :(`);
    console.log(`The correct answer is ${expectedAnswer}.`);
    console.log(`Let's try again, ${playerName}!`);
    return evenGameRound(playerName, round + 1, correctAnswers);
  }
}
