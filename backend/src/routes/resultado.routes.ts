import { Router } from "express";
import { ResultadoController } from "../controllers/resultado.controller";

const router = Router();

router.get("/", ResultadoController.obtenerResultados);

export default router;
