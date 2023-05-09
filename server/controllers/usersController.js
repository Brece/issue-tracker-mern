import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import UserModel from '../models/UserModel.js';

export const getUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find()
            .sort({ 'firstname': 'descending' })
            .exec();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, 'Invalid user ID');
        }

        const user = await UserModel.findById(userId).exec();

        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    
    try {
        if (!firstname || !lastname) {
            throw createHttpError(400, 'First name and last name are required');
        }

        const newUser = await UserModel.create({
            firstname,
            lastname
        })
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    const userId = req.params.userId;
    const newFirstname = req.body.firstname;
    const newLastname = req.body.lastname;

    try {
        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, 'Invalid user ID');
        }

        if (!newFirstname || !newLastname) {
            throw createHttpError(400, 'User must have a first and last name');
        }

        const user = await UserModel.findById(userId).exec();

        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        user.firstname = newFirstname;
        user.lastname = newLastname;

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, 'Invalid user ID');
        }

        const user = await UserModel.findById(userId).exec();

        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        await user.deleteOne();
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

export const deleteUsers = async (req, res, next) => {
    try {
        await UserModel.deleteMany({});

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

// TODO:
export const restoreUsers = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}
