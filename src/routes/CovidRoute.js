const { Router } = require('express');
const CovidController = require('../controllers/CovidController');

const router = Router();

router.get('/covid/casos/estados', CovidController.listarInfosEstadosBrasileiros);
router.get('/covid/casos/estados/:uf', CovidController.listarInfosPorEstado);
router.get('/covid/casos/paises', CovidController.listarInfosPaises);
router.get('/covid/casos/paises/:pais', CovidController.listarInfosPorPais);



module.exports = router;