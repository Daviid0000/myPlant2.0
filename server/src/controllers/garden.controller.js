import { Garden } from "../models/garden.js";

export const createPlant = async (req, res) => {
    try {
        const { plant, description } = req.body;

        const plantName = await Garden.findOne({ where: { plant }});

        if(plantName) {
            throw new Error({
                statusCode: 400,
                message: "Ya existe una planta similar en tu jardin"
            });
        }
        const createdPlant = await Garden.create({
            plant,
            description
        });

        if(!createdPlant) {
            throw new Error({
                statusCode: 400,
                message: "Error al intentar guardar la planta"
            });
        }

        return res.status(201).json({ message: "Planta guardada exitosamente" })
    } catch (error) {
        return res.status(500).json("Error en el servidor", error)
    }
}

export const getPlants = async (req, res) => {
    try {
        const plants = await Garden.findAll();

        if(!plants) {
            throw new Error({
                statusCode: 404,
                message: "Plants Not Found"
            });
        }

        return res.json({ message: "Plants: ", plants});
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error});
    }
}

export const getOnePlant = async (req, res) => {
    try {
        const { id } = req.params;

        const plant = await Garden.findByPk(id);

        if(!plant) {
            throw new Error({
                statusCode: 404,
                message: "Plant Not Found"
            });
        }

        return res.json({ message: "Plant: ", plant });
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error})
    }
}

export const deletePlant = async (req, res) => {
    try {
        const { id } = req.params;

        const plant = await Garden.findByPk(id);
        
        if(!plant) {
            throw new Error({
                statusCode: 400
            })
        }
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor", error})
    }
}