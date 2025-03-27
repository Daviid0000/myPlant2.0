import { Publications } from "../models/publication.js";
import { User } from "../models/user.js";

export const createPublication = async (req, res) => {
    try {
        const { title, description, publicationType } = req.body;

        if(!title) {
            throw new Error(
                res.status(404).json({ message: "¡Title required!" })
            );
        }

        if(!description) {
            throw new Error(
                res.status(404).json({ message: "¡Description required"})
            );
        }

        const user = await User.findOne({ where: {email}})

        const createdPublication = await Publications.create({
            user,
            title,
            description,
            publicationType
        });

        if(!createdPublication) {
            throw new Error(
                res.json({message:'Error al crear la publicación: ', createdPublication})
            );
        }

        return res.status(201).json({ message: "Publicación creada exitosamente" });
    } catch (error) {
        console.error('Error al crear la publicación:', error);
        return res.status(500).json({ message: 'Error en el servidor', error });
    }
}

export const getPublications = async (req, res) => {
    try {
        const publications = await Publications.findAll();

        if(!publications) {
            throw new Error(
                res.json({ message: "Publications Not Found" })
            );
        }

        return res.json({ message: "Publicaciones obtenidas", publications});
    } catch (error) {
        return res.json({ message: "Error en el servidor" });
    }
}

export const getOnePublication = async (req, res) => {
    const { id } = req.params;
    try {
        const publication = await Publications.findByPk(id);

        if(!publication) {
            throw new Error(
                res.json({ message: "Publication Not Found" })
            );
        }

        return res.json({ message: "Publicación encontrada", publication });
    } catch (error) {
        return res.json({ message: "Error en el servidor" });
    }
}

export const updatePublication = async (req, res) => {
    const { id } = req.params;
    const { title, description, publicationType, recipe, warning, plantPhoto } = req.body;
    try {
        const publication = await Publications.findByPk(id);

        if(!publication) {
            throw new Error({
                error: "Publication Not Found"
            });
        }

        const updatedPublication = await publication.update({
            title, description, publicationType, recipe, warning, plantPhoto
        });

        if(!updatedPublication) {
            throw new Error({
                error: "No se pudo actualizar la publicació"
            });
        }

        return res.json({ message: "Publicación actualizada exitosamente", updatedPublication});
    } catch (error) {
        return res.json({ message: "Error en el servidor" });
    }
}

export const deletePublication = async (req, res) => {
    const { id } = req.params;
    try {
        const publication = await Publications.findByPk(id);

        if(!publication) {
            throw new Error({
                error: "Publication Not Found"
            });
        }

        const deletedPublication = await publication.destroy();

        if(!deletedPublication) {
            throw new Error({
                error: "No se pudo eliminar la publicación"
            });
        }

        return res.json({ message: "Publicación eliminada", deletedPublication});
    } catch (error) {
        return res.json({ message: "Error en el servidor" });
    }
}