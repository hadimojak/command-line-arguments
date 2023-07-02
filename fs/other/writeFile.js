const fs = require("fs");

let md = `
thois is a new file
==============

es6 are cook

*template strings
*node
*file system
*cli

`;
fs.writeFile("js.md", md.trim(), (err) => {
  if (err) throw err
fs.appendFileSync("./js.md","\n\n\n### nodejs is vary good languages")

  console.log("craeted");
});
