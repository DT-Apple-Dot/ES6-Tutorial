import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import post_route from './routes/post_route.js'

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/home', function(req, res){
  res.render('form');
});



app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

mongoose
  .connect(process.env.DATABASE || "")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use("/api/posts", post_route);
  })