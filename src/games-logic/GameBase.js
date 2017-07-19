export default class GameBase {
  constructor(description, playable = true) {
    this.description = description;
    this.playable = playable;
  }

  runGreetings() {
    console.log('Welcome to the Brain Games!');
    if (this.description) console.log(this.description);
  }

  getQuestion() {
    // example
    const expectedAnswer = 'yes';
    this.setAnswer(expectedAnswer);
    return 'Are you a wizard?';
  }

  setAnswer(value) {
    this.answer = value;
  }

  getAnswer() {
    return this.answer;
  }
}
