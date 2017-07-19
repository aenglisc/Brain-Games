import GameBase from './GameBase';
import getRandomInt from '../getRandomInt';

export default class GameCalc extends GameBase {
  getQuestion() {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operationSwitcher = getRandomInt(1, 3);
    switch (operationSwitcher) {
      case 1:
        this.setAnswer(`${num1 + num2}`);
        return `${num1} + ${num2} `;
      case 2:
        this.setAnswer(`${num1 - num2}`);
        return `${num1} - ${num2} `;
      case 3:
        this.setAnswer(`${num1 * num2}`);
        return `${num1} * ${num2} `;
      default:
        this.setAnswer(`${num1 + num2}`);
        return `${num1} + ${num2} `;
    }
  }
}
