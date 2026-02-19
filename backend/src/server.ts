import app from "./app";
import { syncDatabase } from "./config/sync";
import { iniciarJobTSE } from "./jobs/tse.job";

const PORT = 3000;

const start = async () => {

  await syncDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    iniciarJobTSE();
  });

};

start();
