const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "how old are you ?",
  "where r u live ?",
  "where were you wish to be now ?",
];

function makeQuestions(qu, done) {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer.trim());
    if (answers.length < qu.length) {
      rl.question(qu[answers.length], questionAnswered);
    } else {
      console.log(answers);
      return done(answers);
    }
  };

  rl.question(questions[0], questionAnswered);
}

makeQuestions(questions, (answers) => {
  console.log(`it is done ${answers}`);
  process.exit();
});
