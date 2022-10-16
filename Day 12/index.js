var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());


app.get('/set', function(req, res){
   res.cookie('name', 'express').send('cookie set');
});

app.get('/clear', function(req, res){
    res.clearCookie('name').send('cookie cleared');

 });
app.listen(3000, function(){
    console.log('sever is running')
});
