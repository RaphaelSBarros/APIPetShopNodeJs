const express = require('express');

const authMiddleware = require("../middleware/auth");

const ControllerCachorro = require('../controllers/cachorros');
const ControllerCliente = require("../controllers/clientes");
const ControllerAtendimento = require("../controllers/atendimentos");
const ControllerUsuarios = require("../controllers/usuarios");

const clientesController = new ControllerCliente();
const cachorrosController = new ControllerCachorro();
const atendimentosController = new ControllerAtendimento();
const usuariosController = new ControllerUsuarios();

const router = express.Router();

router.post('/api/login', usuariosController.Login);

router.get('/api/clientes/', authMiddleware, clientesController.PegarTodos);
router.get('/api/cliente/:id', authMiddleware, clientesController.PegarUm);
router.get('/api/cliente/pets/:dono',authMiddleware,  clientesController.PegarCachorros);
router.post('/api/cliente', authMiddleware, clientesController.Add);
router.put('/api/cliente/:id', authMiddleware, clientesController.Update);
router.delete('/api/cliente/:id', authMiddleware, clientesController.Delete);

router.get('/api/cachorros/', authMiddleware, cachorrosController.PegarTodos);
router.get('/api/cachorro/:id', authMiddleware, cachorrosController.PegarUm);
router.post('/api/cachorro', authMiddleware, cachorrosController.Add);
router.put('/api/cachorro/:id', authMiddleware, cachorrosController.Update);
router.delete('/api/cachorro/:id', authMiddleware, cachorrosController.Delete);

router.get('/api/atendimentos/', authMiddleware, atendimentosController.PegarTodos);
router.get('/api/atendimento/:id', authMiddleware, atendimentosController.PegarUm);
router.post('/api/atendimento', authMiddleware, atendimentosController.Add);
router.put('/api/atendimento/:id', authMiddleware, atendimentosController.Update);
router.delete('/api/atendimento/:id', authMiddleware, atendimentosController.Delete);

//router.post('/api/usuario/cliente', authMiddleware, usuariosController.AddCliente);
//router.post('/api/usuario/atendente', authMiddleware, usuariosController.AddAtendente);

module.exports = router;