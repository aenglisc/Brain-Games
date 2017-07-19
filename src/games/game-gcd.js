import play from '..';
import { getRandomInt, gcd } from '../extra-functions';

const desc = 'Find the given numbers\' greatest common divisor';

const brainGcd = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  return {
    expectedAnswer: `${gcd(num1, num2)}`,
    questionString: `${num1} ${num2} `,
  };
};

export default () => play(brainGcd, desc);
