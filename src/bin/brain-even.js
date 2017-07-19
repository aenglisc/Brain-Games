#!/usr/local/bin/node
import { play } from '../';
import GameEven from '../games-logic/GameEven';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';
const game = new GameEven(message);

play(game);
