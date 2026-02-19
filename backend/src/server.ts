import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { sequelize } from "./config/database";
import "./models/resultado.model";

// IMPORTAR RUTAS
import resultadoRoutes from "./routes/resultado.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "API funcionando correctamente",
  });
});

// REGISTRAR RUTAS
app.use("/api/resultados", resultadoRoutes);

const PORT: number = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

async function start() {
  try {

    await sequelize.authenticate();
    console.log("PostgreSQL conectado");

    await sequelize.sync({ alter: true });
    console.log("Tablas sincronizadas");

    // IMPORTANTE usar 0.0.0.0 para Docker
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error iniciando servidor:", error);
  }
}

start();
