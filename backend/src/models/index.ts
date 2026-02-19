import { sequelize } from "../config/database";
import { Resultado } from "./resultado.model";

export const initDB = async () => {

  try {

    await sequelize.authenticate();

    console.log("PostgreSQL conectado");

    await sequelize.sync();

    console.log("Tablas sincronizadas");

  } catch (error) {

    console.error("Error DB:", error);

  }

};

export { Resultado };
