import { Request, Response } from "express";
import { Resultado } from "../models";

export const listarResultados = async (req: Request, res: Response) => {

  const resultados = await Resultado.findAll({
    order: [["createdAt", "DESC"]],
    limit: 100
  });

  res.json(resultados);

};
