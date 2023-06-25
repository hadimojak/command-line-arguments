const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = (qu, done) => {
  const answers = [];

  const questionAnswered = (answer) => {
    if (answer.toString().trim() === "") {
      process.stdout.write(`bad input\n>`);
    } else {
      answers.push(answer.trim());

      if (answers.length < qu.length) {
        rl.question(qu[answers.length], questionAnswered);
      } else {
        console.log(answers);
        return done(answers);
      }
    }
  };

  rl.question(qu[0], questionAnswered);
};
