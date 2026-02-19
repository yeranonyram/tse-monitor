import { pool } from "../config/database";

export const guardarResultado = async (
  departamento: string,
  municipio: string,
  mesa: string,
  votos: any
) => {

  const query = `
    INSERT INTO resultados
    (departamento, municipio, mesa, votos)
    VALUES ($1, $2, $3, $4)
  `;

  await pool.query(query, [
    departamento,
    municipio,
    mesa,
    votos
  ]);

};
