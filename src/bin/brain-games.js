#!/usr/local/bin/node
import { play } from '../';
import GameBase from '../games-logic/GameBase';

const game = new GameBase();
game.playable = false;

play(game);
