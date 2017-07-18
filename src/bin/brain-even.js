#!/usr/local/bin/node
import {askName, evenGameRound} from '../';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('Other answers will be considered incorrect.');

const playerName = askName();

evenGameRound(playerName, 1, 0);
