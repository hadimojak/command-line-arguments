const { argv,argv0 ,execArgv} = require('process');

function grab(flag) {
  let indexAfterFlag = argv.indexOf(flag) + 1;
  return argv[indexAfterFlag];
}

argv[2]='mojak'

let greeting = grab("--greeting");
let user = grab("--user");

// console.log(greeting);
// console.log(user);

console.log(argv);
