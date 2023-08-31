import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Seed = sequelize.define('Seed' ,{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});