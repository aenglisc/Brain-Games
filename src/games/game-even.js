import play from '..';
import getRandomInt from '../getRandomInt';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const currentNumber = getRandomInt();
  const numberIsEven = currentNumber % 2 === 0;
  return {
    expectedAnswer: numberIsEven ? 'yes' : 'no',
    questionString: `Is ${currentNumber} even? `,
  };
};

export default () => play(brainEven, desc);
