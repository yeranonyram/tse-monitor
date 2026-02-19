import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { sequelize } from "./config/database";
import "./models/resultado.model";

import resultadoRoutes from "./routes/resultado.routes";
import syncRoutes from "./routes/sync.routes";

import { iniciarJobTSE } from "./jobs/tse.job";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Ruta raíz
 */
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "API funcionando correctamente",
  });
});

/**
 * Rutas API
 */
app.use("/api/resultados", resultadoRoutes);
app.use("/api/sync", syncRoutes);

const PORT: number = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 3000;

/**
 * Inicializar servidor
 */
async function start() {

  try {

    // conectar DB
    await sequelize.authenticate();
    console.log("PostgreSQL conectado");

    // sincronizar tablas
    await sequelize.sync({ alter: true });
    console.log("Tablas sincronizadas");

    // iniciar job automático TSE
    iniciarJobTSE();
    console.log("Job TSE iniciado");

    // iniciar servidor
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {

    console.error("Error iniciando servidor:", error);

    process.exit(1);

  }

}

start();
