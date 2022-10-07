var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views')

app.get('/home', function(req, res){
   res.render('index', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });
});

app.listen(3000, () => {console.log("Server is Running on port 3000")});