import play from '..';
import { getRandomInt, balance } from '../utils';

const desc = 'Balance the given number.';

const brainBalance = () => {
  const currentNumber = getRandomInt(1, 9999);

  return {
    expectedAnswer: `${balance(currentNumber)}`,
    questionString: `${currentNumber} `,
  };
};

export default () => play(brainBalance, desc);
