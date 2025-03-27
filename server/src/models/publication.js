import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Publications = sequelize.define('Publications', {
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicationType: {
        type: DataTypes.ENUM('recipe', 'warning'),
        allowNull: false,
    }

});

Publications.sync({force: true});