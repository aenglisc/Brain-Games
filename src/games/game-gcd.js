import play from '..';
import getRandomInt from '../getRandomInt';

const desc = 'Find the greatest common divisor of given numbers.';

const gcd = (x = 0, y = 0) => {
  if (y === 0) { return x; }
  return gcd(y, x % y);
};

const brainEven = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  return {
    expectedAnswer: `${gcd(num1, num2)}`,
    questionString: `${num1} ${num2} `,
  };
};

export default () => play(brainEven, desc);
