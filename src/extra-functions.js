
export const getRandomInt = (min = 1, max = 50) =>
  Math.floor(Math.random() * (1 + (Math.ceil(max) - Math.ceil(min)))) + Math.ceil(min);

export const gcd = (x = 0, y = 0) => {
  if (y === 0) { return x; }
  return gcd(y, x % y);
};

export const numberToArrayOfDigits = (num) => {
  const stringFromNum = num.toString();
  const sortedArrayFromString = stringFromNum.split('').sort();
  const arrayOfDigitsFromArray = sortedArrayFromString.map(item => Number(item));
  return arrayOfDigitsFromArray;
};

export const balance = (num) => {
  const digitsArray = numberToArrayOfDigits(num);

  const recBalance = (array) => {
    const balanced = array.reduce((acc, item, index) => {
      const nextItem = array[index + 1];
      if (nextItem && (nextItem - item >= 2)) {
        /*eslint-disable*/
        array[index] += 1;
        array[index + 1] -= 1;
        /*eslint-enable*/
        return false;
      }
      return acc;
    }, true);
    if (balanced) { return array.join(''); }
    return recBalance(array);
  };
  return recBalance(digitsArray);
};

export const genArithProg = () => {
  const base = getRandomInt(1, 100);
  const increment = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);

  const iterGen = (array, element, progLength) => {
    if (progLength === 0) { return array.join(' '); }
    array.push(element);
    return iterGen(array, element + increment, progLength - 1);
  };
  return iterGen([], base, length);
};
