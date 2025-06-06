import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const User = sequelize.define('User', {

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.sync();