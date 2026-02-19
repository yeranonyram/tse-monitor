import { sequelize } from "./database";

export const syncDatabase = async () => {

  try {

    await sequelize.authenticate();
    console.log("PostgreSQL conectado");

    await sequelize.sync();
    console.log("Tablas sincronizadas");

  } catch (error) {

    console.error("Error DB:", error);

  }

};
