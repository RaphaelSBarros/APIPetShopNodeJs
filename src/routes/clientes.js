const express = require('express');
const ControllerCachorro = require('../controllers/cachorros');
const ControllerCliente = require("../controllers/clientes");

const clientesController = new ControllerCliente();
const cachorrosController = new ControllerCachorro();
const router = express.Router();

router.get('/api/clientes/', clientesController.PegarTodos);
router.get('/api/cliente/:id', clientesController.PegarUm);
router.get('/api/cliente/pets/:dono', clientesController.PegarCachorros);
router.post('/api/cliente', clientesController.Add);
router.put('/api/cliente/:id', clientesController.Update);
router.delete('/api/cliente/:id', clientesController.Delete);

router.get('/api/cachorros/', cachorrosController.PegarTodos);
router.get('/api/cachorro/:id', cachorrosController.PegarUm);
router.post('/api/cachorro', cachorrosController.Add);
router.put('/api/cachorro/:id', cachorrosController.Update);
router.delete('/api/cachorro/:id', cachorrosController.Delete);

module.exports = router;