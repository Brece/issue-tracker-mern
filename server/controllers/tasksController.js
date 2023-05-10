import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import TaskModel from '../models/TaskModel.js';

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await TaskModel.find()
            .sort({ 'updatedAt': 'descending' })
            .populate('userId')
            .exec();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
}

export const getTask = async (req, res, next) => {
    const taskId = req.params.taskId;

    try {
        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, 'Invalid task ID');
        }

        const task = await TaskModel.findById(taskId)
            .populate('userId')
            .exec();

        if (!task) {
            throw createHttpError(404, 'Task not found');
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
}

export const createTask = async (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;
    const status = req.body.status;
    const userId = req.body.userId;

    try {
        if (!title || !text) {
            throw createHttpError(400, 'Task must have a title and a description');
        }

        // frontend form sets userId to an empty string if the task gets unassigned
        const newTask = await TaskModel.create({
            title,
            text,
            status,
            userId: userId === '' ? null : userId
        });
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
}

export const updateTask = async (req, res, next) => {
    const taskId = req.params.taskId;
    const newTitle = req.body.title;
    const newText = req.body.text;
    const newStatus = req.body.status;
    const newUserId = req.body.userId;

    try {
        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, 'Invalid task ID');
        }

        if (!newTitle || !newText) {
            throw createHttpError(400, 'Task must have a title and a description');
        }

        const task = await TaskModel.findById(taskId).exec();

        if (!task) {
            throw createHttpError(404, 'Task not found');
        }

        task.title = newTitle;
        task.text = newText;
        task.status = newStatus;

        // frontend form sets userId to an empty string if the task gets unassigned
        task.userId = newUserId === '' ? null : newUserId;

        const updatedTask = await task.save();
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
}

export const deleteTask = async (req, res, next) => {
    const taskId = req.params.taskId;

    try {
        if (!mongoose.isValidObjectId(taskId)) {
            throw createHttpError(400, 'Invalid task ID');
        }

        const task = await TaskModel.findById(taskId).exec();

        if (!task) {
            throw createHttpError(400, 'Task not found');
        }

        await task.deleteOne();
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export const deleteTasks = async (req, res, next) => {
    try {
        await TaskModel.deleteMany({});

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

// TODO:
export const restoreTasks = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
