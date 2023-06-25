const fs = require("fs");

if(fs.existsSync('./myDir'))console.log('allready exict')
else{fs.mkdir("./myDir", (err) => {
  if (err) console.log(err);

  fs.readFile("./readme.md", "utf-8", (err, data) => {
    fs.writeFileSync("./myDir/text.md", data);
  }); 
});}


