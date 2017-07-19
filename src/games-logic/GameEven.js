import GameBase from './GameBase';
import getRandomInt from '../getRandomInt';

export default class GameEven extends GameBase {
  getQuestion() {
    const currentNumber = getRandomInt();
    const numberIsEven = currentNumber % 2 === 0;
    const expectedAnswer = numberIsEven ? 'yes' : 'no';
    this.setAnswer(expectedAnswer);
    return `Is ${currentNumber} even? `;
  }
}
