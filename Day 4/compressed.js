var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('text.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('text.txt.gz'));
  
console.log("File Compressed.");