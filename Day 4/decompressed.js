var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('text.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('text.txt'));
  
console.log("File Decompressed.");