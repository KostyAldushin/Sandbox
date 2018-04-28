const fs = require("fs")
fs.readFile("/textfile.js", (err,data)=>{
    if(err){
        throw new Error(err)
    }
    let prepared = data.toString();

    prepared+= `console.log("i wrote")`;
    fs.writeFile("/textfile.js")
})
console.log("yeap");