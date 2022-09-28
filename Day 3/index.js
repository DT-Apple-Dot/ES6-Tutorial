//const fs = require('fs');
//
//console.log("'start program")
//
//fs.readFile('note.txt', (err, data) => {
//  if (err) throw err;
//  console.log(data.toString())
//})
//console.log('End program')

const http = require('http');

http.createServer((req, res) => {
  res.end("Hello")
}).listen(3000)