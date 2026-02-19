import { ResultadoService } from "../services/resultado.service";

export async function iniciarJobTSE() {

  setInterval(async () => {

    try {

      console.log("Sincronizando TSE...");

      await ResultadoService.actualizarResultados();

      console.log("Sincronización exitosa");

    } catch (error) {

      console.error("Error en sincronización:", error);

    }

  }, 30000);

}
