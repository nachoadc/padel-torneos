import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";

export const Organization = sequelize.define('Organization', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    timestamps: false
});