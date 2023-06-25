const event = require("events");

const emitter = new event.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}:  ${message}`);
});

// emitter.emit("customEvent", "hellow", "ahmad")
// emitter.emit("customEvent", "r u stupid", "gholi")

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "goodbye", "process");
    process.exit();
  }
  emitter.emit("customEvent", data.toString().trim(), "terminal");
});
