import axios from "axios";

const API_BASE = "https://computo.oep.org.bo/api";

export async function obtenerResultadosOEP() {

  const response = await axios.get(`${API_BASE}/presidente`);

  return response.data;

}
