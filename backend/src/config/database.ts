import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false,
  }
);

export const conectarDB = async () => {

  let conectado = false;
  let intentos = 0;

  while (!conectado && intentos < 10) {

    try {

      await sequelize.authenticate();

      console.log("PostgreSQL conectado");

      await sequelize.sync({ alter: true });

      console.log("Tablas sincronizadas");

      conectado = true;

    } catch (error) {

      intentos++;

      console.log(`Intentando conectar a DB (${intentos}/10)...`);

      await new Promise(res => setTimeout(res, 3000));

    }

  }

  if (!conectado) {

    console.error("No se pudo conectar a PostgreSQL");

    process.exit(1);

  }

};
