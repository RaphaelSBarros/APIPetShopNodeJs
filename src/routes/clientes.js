const express = require('express');
const ControllerCachorro = require('../controllers/cachorros');
const ControllerCliente = require("../controllers/clientes");
const ControllerAtendimento = require("../controllers/atendimentos");
const ControllerUsuario = require("../controllers/usuarios");

const clientesController = new ControllerCliente();
const cachorrosController = new ControllerCachorro();
const atendimentosController = new ControllerAtendimento();
const usuariosController = new ControllerUsuario();
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

router.get('/api/atendimentos/', atendimentosController.PegarTodos);
router.get('/api/atendimento/:id', atendimentosController.PegarUm);
router.post('/api/atendimento', atendimentosController.Add);
router.put('/api/atendimento/:id', atendimentosController.Update);
router.delete('/api/atendimento/:id', atendimentosController.Delete);

router.get('/api/usuarios/', usuariosController.PegarTodos);
router.get('/api/usuario/:id', usuariosController.PegarUm);
router.post('/api/usuario', usuariosController.Add);
router.put('/api/usuario/:id', usuariosController.Update);
router.delete('/api/usuario/:id', usuariosController.Delete);

module.exports = router;