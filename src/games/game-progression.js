import play from '..';
import { getRandomInt, genArithProg } from '../utils';

const desc = 'What number is this progression missing?';

const brainProg = () => {
  const prog = genArithProg();
  const arrayFromProg = prog.split(' ');
  const elementToHide = getRandomInt(0, arrayFromProg.length - 1);
  const expectedAnswer = arrayFromProg[elementToHide];
  const question = arrayFromProg.map(item =>
      (item === expectedAnswer ? '..' : item)).join(' ');

  return {
    expectedAnswer: `${expectedAnswer}`,
    questionString: `${question}\n`,
  };
};

export default () => play(brainProg, desc);
