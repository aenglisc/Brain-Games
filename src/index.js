import * as readlineSync from 'readline-sync';

export default () => {
  const playerName = readlineSync.question('\nMay I know your name? ');
  console.log(`Hello, ${playerName}!`);
};
