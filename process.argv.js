const process = require("process");

process.stdout.write("hellow  \n");
const questions = [
  "what is your name \n",
  "how old years are you \n",
  "what counrty you perfer to live \n ",
];

const answers = [];

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(`>`);
}
ask();

function prompt() {
  process.stdin.on("data", function (val) {
    if (val.toString().trim() === "") {
      process.stdout.write(`bad input\n>`);
    } else {
      answers.push(val.toString().trim());
      process.argv[1 + answers.length] = val.toString().split('>')[0].split("\n")[0];
      if (answers.length < questions.length) {
        ask(answers.length);
      } else {
        process.exit();
      }
    }
  });
}

process.on("exit", function (params) {
  process.stdout.write(`\n\n\n good job \n`);
});

prompt();
