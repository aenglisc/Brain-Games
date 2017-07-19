// eslint-disable-next-line
import readlineSync from 'readline-sync';

const BR = '\n';

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  if (description) { console.log(description); }
  const playerName = readlineSync.question(`${BR}May I know your name? `);
  console.log(`Hello, ${playerName}!`);

  const playRound = (round) => {
    const correctAnswers = round - 1;
    if (correctAnswers === 3) {
      console.log(`${BR}Congratulations, ${playerName}!${BR}`);
    } else {
      const { expectedAnswer, questionString } = game();
      const question = `${BR}Round ${round}: ${questionString}`;
      const answer = readlineSync.question(question);
      if (answer === expectedAnswer) {
        console.log('Correct!');
        playRound(round + 1);
      } else {
        console.log(`Sorry, "${answer}" is the wrong answer. :(`);
        console.log(`The correct answer is "${expectedAnswer}".`);
        console.log(`${BR}Let's try again, ${playerName}!${BR}`);
      }
    }
  };
  if (game) { playRound(1); }
};
