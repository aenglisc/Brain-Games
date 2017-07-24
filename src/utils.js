
// generates a random integer between min and max (inclusive), 1 to 50 by default
export const getRandomInt = (min = 1, max = 50) =>
  Math.floor(Math.random() * (1 + (Math.ceil(max) - Math.ceil(min)))) + Math.ceil(min);

// returns the greatest common divisor of two numbers
export const gcd = (x = 0, y = 0) => {
  if (y === 0) { return x; }
  return gcd(y, x % y);
};

// returns a sorted array of digits from a number
export const numberToSortedArrayOfDigits = (num) => {
  const stringFromNum = num.toString();
  const sortedArrayFromString = stringFromNum.split('').sort();
  const arrayOfDigitsFromArray = sortedArrayFromString.map(item => Number(item));
  return arrayOfDigitsFromArray;
};

// returns a balanced number (every next digit is equal to or greater by 1 than the previous)
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

// generates a string representing an arithmetic progression
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

// checks for primality
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
