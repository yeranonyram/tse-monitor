import { Router } from "express";
import { ResultadoService } from "../services/resultado.service";

const router = Router();

router.get("/", async (req, res) => {

  try {

    await ResultadoService.actualizarResultados();

    res.json({
      ok: true,
      message: "Resultados actualizados",
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      error: "Error sincronizando",
    });

  }

});

export default router;
