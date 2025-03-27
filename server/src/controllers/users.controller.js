import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";

export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        
        const userCreated = await User.create({
            username, email, password
        })

        const token = jwt.sign({username, email}, environments.secret_key, { expiresIn: "1h" })

        const hashPass = await bcrypt.genSalt(10);
        userCreated.password = await bcrypt.hash(password, hashPass);

        const newUserCreated = await userCreated.save();

        if(!userCreated) {
            throw new Error(
                res.json({ message: "Error al crear el usuario" }) 
            )
        }

        return res.status(201).json({ message: "Usuario creado exitosamente", newUserCreated, token })
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if(!users) {
            throw new Error(
                res.json({ message: "Users Not Found" })
            )
        }

        return res.json({ message: "Usuarios encontrados", users })
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" })
    }
}

export const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user) {
            throw new Error(
                res.json({ message: "User Not Found" })
            )
        }

        return res.json({ message: "Usuario encontrado", user})
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error})
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        const user = await User.findByPk(id);

        if(!user) {
            throw new Error(
                res.json({ message: "User Not Found" })
            )
        }

        const userUpdated = await user.update({
            username, email, password
        });

        if(!userUpdated) {
            throw new Error(
                res.json({ message: "Error al actualizar el usuario" })
            )
        }

        return res.json({ message: "Usuario actualizado exitosamente" })
    } catch (error) {
        return res.statu(500).json({ message: "Error en el servidor", error })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id} = req.params;

        const user = await User.findByPk(id);

        if(!user) {
            throw new Error(
                res.json({ message: "User Not Found" })
            )
        }

        const userDeleted = await user.destroy();

        if(!userDeleted) {
            throw new Error(
                res.json({ message: "Error al intentar eliminar el usuario" })
            )
        }

        return res.json({ message: "Usuario eliminado exitosamente" })
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error})
    }
}