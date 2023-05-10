import express from 'express';
import * as TasksController from '../controllers/tasksController.js';

const router = express.Router();

router.get('/', TasksController.getTasks);

router.get('/:taskId', TasksController.getTask);

router.post('/', TasksController.createTask);

router.patch('/:taskId', TasksController.updateTask);

router.delete('/', TasksController.deleteTasks);

router.delete('/:taskId', TasksController.deleteTask);

export default router;
