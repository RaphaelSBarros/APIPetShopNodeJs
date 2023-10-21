const express = require('express');

const {authMiddleware, authFuncionario, authAdm, authCliente} = require("../middleware/auth");

const ControllerCachorro = require('../controllers/cachorros');
const ControllerCliente = require("../controllers/clientes");
const ControllerAtendimento = require("../controllers/atendimentos");
const ControllerUsuario = require("../controllers/usuarios");

const clientesController = new ControllerCliente();
const cachorrosController = new ControllerCachorro();
const atendimentosController = new ControllerAtendimento();
const usuariosController = new ControllerUsuario();

const router = express.Router();

router.get('/api/clientes/', authMiddleware, authFuncionario, clientesController.PegarTodos);
router.get('/api/cliente/:id', authMiddleware, authFuncionario, clientesController.PegarUm);
router.get('/api/cliente/pets/:dono',authMiddleware, authFuncionario,  clientesController.PegarCachorros);
router.post('/api/cliente', authMiddleware, authFuncionario, clientesController.Add);
router.put('/api/cliente/:id', authMiddleware, authFuncionario, clientesController.Update);
router.delete('/api/cliente/:id', authMiddleware, authFuncionario, clientesController.Delete);

router.get('/api/cachorros/', authMiddleware, authCliente, cachorrosController.PegarTodos);
router.get('/api/cachorro/:id', authMiddleware, authCliente, cachorrosController.PegarUm);
router.post('/api/cachorro', authMiddleware, authCliente, cachorrosController.Add);
router.put('/api/cachorro/:id', authMiddleware, authFuncionario, cachorrosController.Update);
router.delete('/api/cachorro/:id', authMiddleware, authFuncionario, cachorrosController.Delete);

router.get('/api/atendimentos/', authMiddleware, authFuncionario, atendimentosController.PegarTodos);
router.get('/api/atendimento/:id', authMiddleware, authFuncionario, atendimentosController.PegarUm);
router.post('/api/atendimento', authMiddleware, atendimentosController.Add);
router.put('/api/atendimento/:id', authMiddleware, authAdm, atendimentosController.Update);
router.delete('/api/atendimento/:id', authMiddleware, authAdm, atendimentosController.Delete);

router.post('/api/usuario/cliente', authMiddleware, authFuncionario, usuariosController.AddCliente);
router.post('/api/usuario/funcionario', authMiddleware, authAdm, usuariosController.AddAtendente);
router.put('/api/usuario/:id', authMiddleware, authAdm, usuariosController.Update);
router.delete('/api/usuario/:id', authMiddleware, authAdm, usuariosController.Delete);

router.post('/api/login', usuariosController.Login);

module.exports = router;