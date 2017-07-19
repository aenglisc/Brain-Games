#!/usr/local/bin/node
import { play } from '../';
import GameCalc from '../games-logic/GameCalc';

const message = 'What is the result of the expression?';
const game = new GameCalc(message);

play(game);
