import axios from "axios";
import { Resultado } from "../models/resultado.model";

const API_BASE = "https://computo.oep.org.bo/api";

export class ResultadoService {

  static async obtenerTodos() {
    return await Resultado.findAll({
      order: [["votos", "DESC"]],
    });
  }

  static async guardarResultados() {

    try {

      const response = await axios.get(`${API_BASE}/presidente`);

      const data = response.data;

      console.log("Datos TSE recibidos");

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

    }

  }

}
