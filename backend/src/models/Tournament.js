import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Tournament = sequelize.define('Tournament', {
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
    img: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMwl2hG1ZsOajflM1eEAiK6rsVSJ3jej5KQ&usqp=CAU"
    },
    start: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    registration_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    game_days: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});