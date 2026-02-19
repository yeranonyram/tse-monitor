import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Resultado = sequelize.define("Resultado", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  votos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  porcentaje: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

}, {
  tableName: "resultados",
  timestamps: true,
});
