import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Categorie = sequelize.define('Categorie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    timestamps: false
});