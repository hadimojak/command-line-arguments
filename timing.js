const waitTime = 3000;
const finishedTime = () => {
  console.log("done");
  clearInterval(interval);
};

setTimeout(finishedTime, 3000);

let currentTime = 0;

const interval = setInterval(() => {
  currentTime += 500;

  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0)
  process.stdout.write(`please waiting ... ${p.toString()}`)
}, 500);
