import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Garden = sequelize.define('Garden', {
    plant: {
        type: DataTypes.ENUM("toxic", "edible"),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});