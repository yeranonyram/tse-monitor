import { Request, Response } from "express";
import { ResultadoService } from "../services/resultado.service";

export class ResultadoController {

  static async obtenerResultados(req: Request, res: Response) {
    try {

      const resultados = await ResultadoService.obtenerTodos();

      res.json({
        ok: true,
        total: resultados.length,
        data: resultados,
      });

    } catch (error) {

      res.status(500).json({
        ok: false,
        error: "Error al obtener resultados",
      });

    }
  }

}
