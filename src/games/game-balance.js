import play from '..';
import getRandomInt from '../getRandomInt';

const desc = 'Balance the given number.';

const numberToArrayOfDigits = (num) => {
  const stringFromNum = num.toString();
  const sortedArrayFromString = stringFromNum.split('').sort();
  const arrayOfDigitsFromArray = sortedArrayFromString.map(item => Number(item));
  return arrayOfDigitsFromArray;
};

const balance = (num) => {
  const digitsArray = numberToArrayOfDigits(num);

  const recBalance = (array) => {
    const balanced = array.reduce((acc, item, index) => {
      const nextItem = array[index + 1];
      if (nextItem && (nextItem - item >= 2)) {
        /*eslint-disable*/
        array[index] += 1;
        array[index + 1] -= 1;
        /*eslint-disable*/
        return false;
      }
      return acc;
    }, true);
    if (balanced) { return array.join(''); }
    return recBalance(array);
  };
  return recBalance(digitsArray);
};

const brainEven = () => {
  const currentNumber = getRandomInt(1, 9999);
  return {
    expectedAnswer: `${balance(currentNumber)}`,
    questionString: `${currentNumber} `,
  };
};

export default () => play(brainEven, desc);
