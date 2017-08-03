// generates a random integer between min and max (inclusive), default: 1 to 50
export const getRandomInt = (min = 1, max = 50) => {
  const ceilMin = Math.ceil(min);
  const ceilMax = Math.ceil(max);
  return Math.floor(Math.random() * (1 + (ceilMax - ceilMin))) + ceilMin;
};

// returns the greatest common divisor of two numbers
export const gcd = (x = 0, y = 0) => (y === 0 ? x : gcd(y, x % y));

// returns a sorted array of digits from a number
export const numberToSortedArrayOfDigits = (num) => {
  const stringFromNum = num.toString();
  const sortedArrayFromString = stringFromNum.split('').sort();
  const digitsArrayFromArray = sortedArrayFromString.map(item => Number(item));
  return digitsArrayFromArray;
};

// returns a balanced number
// every next digit is greater by one or equal to the previous
export const balance = (num) => {
  const digitsArray = numberToSortedArrayOfDigits(num);
  const recBalance = (array) => {
    const newArray = array.reduce((acc, item, index) => {
      const nextItem = array[index + 1];
      if (nextItem && (nextItem - item >= 2)) {
        acc.arr[index] += 1;
        acc.arr[index + 1] -= 1;
        acc.isBalanced = false;
        return acc;
      }
      return acc;
    }, { arr: array, isBalanced: true });
    if (newArray.isBalanced) { return newArray.arr.join(''); }
    return recBalance(newArray.arr);
  };
  return recBalance(digitsArray);
};

// generates an arithmetic progression in the form of a string
export const genArithProg = () => {
  const base = getRandomInt(1, 100);
  const incr = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const iterGen = (str, element, acc) => {
    if (acc === 0) { return str; }
    const newStr = `${str}${element}`;
    const newElement = element + incr;
    return iterGen(acc === 1 ? newStr : `${newStr} `, newElement, acc - 1);
  };
  return iterGen('', base, length);
};

// checks for primality
export const isPrime = (num) => {
  const sqrtNum = Math.sqrt(num);
  if (num <= 1 || num % 2 === 0) { return false; }
  const iterCheck = (div) => {
    if (div > sqrtNum) { return true; }
    if (num % div === 0) { return false; }
    return iterCheck(div + 2);
  };
  return iterCheck(3);
};
