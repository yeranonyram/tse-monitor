import { ResultadoService } from "../services/resultado.service";

export const iniciarJobTSE = () => {

  setInterval(async () => {

    console.log("Consumiendo TSE...");

    await ResultadoService.guardarResultados();

  }, 60000);

};
