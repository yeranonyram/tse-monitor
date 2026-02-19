import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Resultado extends Model {
  public id!: number;
  public codigo!: string;
  public nombre!: string;
  public votos!: number;
  public porcentaje!: number;
}

Resultado.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  },
  {
    sequelize,
    modelName: "Resultado",
    tableName: "resultados",
    timestamps: true,
  }
);
