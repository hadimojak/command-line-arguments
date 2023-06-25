const readLine = require("readline");
const { EventEmitter } = require("events");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (qu, done) => {
  const answers = [];

  const emitter = new EventEmitter();

  const questionAnswered = (answer) => {
    emitter.emit("answer", answer);

    answers.push(answer.toString().trim());
    if (answers.length < qu.length) {
      rl.question(qu[answers.length], questionAnswered);
    } else {
      console.log(answers);
      return done(answers);
    }
  };

  rl.question(qu[0], questionAnswered);
  return emitter;
};
