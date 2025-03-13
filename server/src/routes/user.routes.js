import Router from 'express';
import { createUser, deleteUser, getOneUser, getUsers, updateUser } from '../controllers/users.controller.js';

export const userRoutes = Router();

userRoutes.post('/', createUser);
userRoutes.get('/', getUsers);
userRoutes.get('/:id', getOneUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);
