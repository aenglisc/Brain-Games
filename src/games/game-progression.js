import play from '..';
import { getRandomInt, genArithProg } from '../extra-functions';

const desc = 'What number is this progression missing?';
const BR = '\n';

const brainProg = () => {
  const prog = genArithProg();
  const arrayFromProg = prog.split(' ');
  const elementToHide = getRandomInt(0, arrayFromProg.length - 1);
  const expectedAnswer = arrayFromProg[elementToHide];
  const question = arrayFromProg.map(item =>
      (item === expectedAnswer ? '..' : item)).join(' ');

  return {
    expectedAnswer: `${expectedAnswer}`,
    questionString: `${question}${BR}`,
  };
};

export default () => play(brainProg, desc);
