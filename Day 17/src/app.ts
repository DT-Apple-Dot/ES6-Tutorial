import  express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import bodyParser from 'body-parser';
import movies_route from "./routers/movies_route"

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array('Nar Nar'));

mongoose
    .connect(process.env.DATABASE || "")
    .then(() => {
        app.listen(PORT, () => console.log(`Sever is running in ${PORT}`));
        app.use('/movies', movies_route);
    })