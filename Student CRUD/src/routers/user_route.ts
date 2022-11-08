import express from 'express';
import { createUser, deleteUser, findUser, getUser, updateUser } from '../controllers/user_controller';

const router = express.Router();

router
  .route('/')
  .get(getUser)
  .post(createUser)

 router
  .route('/:id')
  .get(findUser)
  .put(updateUser)
  .delete(deleteUser)

export default router;
