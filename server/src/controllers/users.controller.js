import { User } from "../models/user.js";

export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userCreated = await User.create({
            username, email, password
        })

        if(!userCreated) {
            throw new Error(
                res.json({ message: "Error al crear el usuario" }) 
            )
        }

        res.status(201).json({ message: "Usuario creado exitosamente" })
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
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

        res.json({ message: "Usuarios encontrados", users })
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor" })
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

        res.json({ message: "Usuario encontrado", user})
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error})
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

        res.json({ message: "Usuario actualizado exitosamente" })
    } catch (error) {
        res.statu(500).json({ message: "Error en el servidor", error })
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

        res.json({ message: "Usuario eliminado exitosamente" })
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error})
    }
}