import readlineSync from 'readline-sync.js';

export default () => {
  const playerName = readlineSync.question('\nMay I know your name? ');
  console.log(`Hello, ${playerName}!`);
};
