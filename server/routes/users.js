import express from 'express';
import * as UsersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/', UsersController.getUsers);

router.get('/:userId', UsersController.getUser);

router.post('/', UsersController.createUser);

router.patch('/:userId', UsersController.updateUser);

router.delete('/', UsersController.deleteUsers);

router.delete('/:userId', UsersController.deleteUser);

export default router;
