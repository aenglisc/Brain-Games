import play from '..';
import { getRandomInt, isPrime } from '../utils';

const desc = 'Is the number a prime?';

const brainPrime = () => {
  const currentNumber = Math.floor(getRandomInt(2, 1000) / 2);
  const numberIsPrime = isPrime(currentNumber);

  return {
    expectedAnswer: numberIsPrime ? 'yes' : 'no',
    questionString: `${currentNumber} `,
  };
};

export default () => play(brainPrime, desc);
