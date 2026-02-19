import { Resultado } from "../models/resultado.model";

export const guardarResultado = async (data: any) => {

  try {

    await Resultado.upsert({
      codigo: data.codigo,
      nombre: data.nombre,
      votos: data.votos,
      porcentaje: data.porcentaje
    });

  } catch (error) {

    console.error("Error guardando resultado:", error);

  }

};

export const obtenerResultados = async () => {

  return await Resultado.findAll({
    order: [["votos", "DESC"]]
  });

};
