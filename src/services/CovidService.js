const axios = require('axios').default;
require('dotenv').config()
const apiUrl = process.env.API_URL;

class CovidService {
  static async retornarInfosEstadosBrasileiros() {
      const response = await axios.get(apiUrl);
      return response.data;
    }
  
  static async retornarInfosPorEstado(uf) {
    const response = await axios.get(apiUrl + `/brazil/uf/${uf}`);
    return response.data;
  }

  static async retornarInfosPaises() {
    const response = await axios.get(apiUrl + "/countries");
    return response.data;
  }

  static async retornarInfosPorPais(pais) {
    const response = await axios.get(apiUrl + `/${pais}`);
    return response.data;
  }
}

module.exports = CovidService;