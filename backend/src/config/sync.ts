import { sequelize } from "./database";
import "../models/resultado.model";

export const syncDatabase = async () => {
  await sequelize.sync({ alter: true });

  console.log("Tablas sincronizadas");
};
