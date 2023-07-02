const fs = require("fs");

const ipsum = fs.readFile("./readme.md",'utf-8',(err,data)=>{console.log(data
    )
});

