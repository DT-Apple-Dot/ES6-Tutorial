//let http = require('http');
//
//let server = http.createServer(function (req, res) {
//  res.end("Hello")
//})
//
//server.listen(3000, function () {
//  console.log("Server Running")
//})

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)