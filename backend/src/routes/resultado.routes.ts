import { Router } from "express";
import { Resultado } from "../models/resultado.model";

const router = Router();

// GET resultados
router.get("/", async (req, res) => {
  try {

    const resultados = await Resultado.findAll();

    res.json({
      ok: true,
      total: resultados.length,
      data: resultados,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      ok: false,
      error: "Error al obtener resultados",
    });

  }
});

export default router;
