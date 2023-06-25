const makeQuestions = require("./lib/makeQuestions");

const questions = [
  "how old are you ?",
  "where r u live ?",
  "where were you wish to be now ?",
];

const answerEvent = makeQuestions(questions, (answers) => {
  console.log(`it is done ${answers}`);
  process.exit();
});

answerEvent.on("answer", (answer) => console.log(`answer  is ${answer}`));
