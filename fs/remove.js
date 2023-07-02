const fs = require("fs");
const path = require("path");

function removeDirectory(_path) {
  fs.readdirSync(_path).forEach((val) => {
    if (fs.statSync(`${_path}/${val}`).isDirectory()) {
      removeDirectory(`${_path}/${val}`);
    } else {
      fs.renameSync(`${_path}/${val}`, `./${val}`);
    }
  });

  fs.rmdirSync(_path)
}


removeDirectory("./newLife");
