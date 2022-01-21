const CovidService = require('../services/CovidService');

class CovidController {
  static async listarInfosEstadosBrasileiros(req, res) {
    try {
      const response = await CovidService.retornarInfosEstadosBrasileiros();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async listarInfosPorEstado(req, res) {
    const uf = req.params.uf;
    try {
      const response = await CovidService.retornarInfosPorEstado(uf);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async listarInfosPaises(req, res) {
    try {
      const response = await CovidService.retornarInfosPaises();
      return res.status(200).json(response) ;
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async listarInfosPorPais(req, res) {
    const pais = req.params.pais;
    try {
      const response = await CovidService.retornarInfosPorPais(pais);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = CovidController;