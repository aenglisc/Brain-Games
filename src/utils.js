
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

  const iterGen = (str, element, acc) => {
    if (acc === 0) { return str; }
    return iterGen(acc === 1 ? `${str}${element}`
                             : `${str}${element} `,
                             element + increment, acc - 1);
  };
  return iterGen('', base, length);
};
/*
const primesBeforeHundred = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

export const isPrime = (num) => {
  if (num <= 1) { return false; }
  const primesSet = new Set(primesBeforeHundred);
  if (num < 100 && primesSet.has(num)) { return true; }
  return primesBeforeHundred.reduce((acc, item) =>
    (num > item && num % item === 0 ? false : acc), true);
};
*/
export const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);
  if (num <= 1) { return false; }
  if (num % 2 === 0) { return false; }
  const iterCheck = (div) => {
    if (div > sqrtNum) { return true; }
    if (num % div === 0) { return false; }
    return iterCheck(div + 2);
  };
  return iterCheck(3);
};
