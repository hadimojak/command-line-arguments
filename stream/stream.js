const fs = require("fs");

let stream = fs.createReadStream("../fs/text.log", "utf-8");
let data;

stream.once("data", (chunk) => {
  console.log("stream started");
  console.log(chunk);
});

stream.on("data", (chunk) => {
  console.log("chunk  ", chunk.length);
  data += chunk;
});

stream.on('end',()=>{
    console.log('finished data at ',data.length )
})

console.log("reading");
