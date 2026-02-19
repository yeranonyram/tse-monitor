import { Resultado } from "../models/resultado.model";
import { obtenerResultadosOEP } from "./oep.service";

export class ResultadoService {

  static async obtenerTodos() {

    return await Resultado.findAll({
      order: [["votos", "DESC"]],
    });

  }

  static async actualizarResultados() {

    try {

      const data = await obtenerResultadosOEP();

      console.log("Datos TSE recibidos:", data.length);

      for (const item of data) {

        await Resultado.upsert({
          codigo: item.codigo,
          nombre: item.nombre,
          votos: item.votos,
          porcentaje: item.porcentaje,
        });

      }

      console.log("Resultados guardados");

    } catch (error) {

      console.error("Error guardando resultados:", error);

      throw error;

    }

  }

}
