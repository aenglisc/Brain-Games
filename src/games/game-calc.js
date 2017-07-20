import play from '..';
import { getRandomInt } from '../utils';

const desc = 'What is the result of the expression?';

const brainCalc = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operationSwitcher = getRandomInt(1, 3);

  switch (operationSwitcher) {
    case 1:
      return {
        expectedAnswer: `${num1 + num2}`,
        questionString: `${num1} + ${num2} `,
      };
    case 2:
      return {
        expectedAnswer: `${num1 - num2}`,
        questionString: `${num1} - ${num2} `,
      };
    case 3:
      return {
        expectedAnswer: `${num1 * num2}`,
        questionString: `${num1} * ${num2} `,
      };
    default:
      return {
        expectedAnswer: `${num1 + num2}`,
        questionString: `${num1} + ${num2} `,
      };
  }
};

export default () => play(brainCalc, desc);
