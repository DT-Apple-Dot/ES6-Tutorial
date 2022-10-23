import express from 'express';
import { createMovie, deleteMovie, findMovie, getMovie, updateMovie } from '../controllers/movies_controller';

const router = express.Router();

router
  .route('/')
  .get(getMovie)
  .post(createMovie)

 router
  .route('/:id')
  .get(findMovie)
  .put(updateMovie)
  .delete(deleteMovie)

export default router;