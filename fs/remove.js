const fs = require("fs");
const path = require("path");
// fs.copyFileSync('./readme2.md','./readme.md')
// fs.unlinkSync('./readme2.md')

// fs.rmdir('./newLife',(err)=>{if(err)console.log(err)})

function removeDirectory(_path) {
  const subDirectories = fs.readdirSync(_path);

  if (subDirectories.length === 0) {
    fs.rmdirSync(_path);
  } else {
    for (let i = 0; i < subDirectories.length; i++) {
      const subSub = fs.readdirSync(
        path.join('.',__filename)
      );

      console.log(subSub);
    }
  }
}

removeDirectory("./newLife");
