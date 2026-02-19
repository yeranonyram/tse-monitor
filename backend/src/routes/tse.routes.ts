import { Router } from "express";
import { listarResultados } from "../controllers/tse.controller";

const router = Router();

router.get("/resultados", listarResultados);

export default router;
