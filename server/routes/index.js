import express from 'express';
import { tasks, users } from '../utils/db.js';
import TaskModel from '../models/TaskModel.js';
import UserModel from '../models/UserModel.js';

const router = express.Router();

router.get('/', () => {});

// restore files from /utils/db.js
router.get('/restore', async (req, res, next) => {
    try {
        await Promise.all(
            [
                TaskModel.insertMany(tasks, { ordered: false }),
                UserModel.insertMany(users, { ordered: false })
            ]
        );
        res.sendStatus(201);
    } catch (error) {
        next(error)
    }
});

export default router;
