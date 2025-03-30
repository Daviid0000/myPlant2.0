import Router from 'express';
import { createUser, deleteUser, getOneUser, getUsers, updateUser, userLogin } from '../controllers/users.controller.js';
import { errorValidation } from '../../middleware/error.validation.js';
import { userSchema } from '../models/Schemas/user.schemas.js';

export const userRoutes = Router();

userRoutes.post('/', userSchema, errorValidation, createUser);
userRoutes.get('/', getUsers);
userRoutes.get('/:id', getOneUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);
userRoutes.post('/login', userSchema, errorValidation, userLogin);
