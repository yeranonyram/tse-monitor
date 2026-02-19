import express from "express";
import resultadoRoutes from "./routes/resultado.routes";

const app = express();

app.use(express.json());

app.use("/api/resultados", resultadoRoutes);

export default app;
