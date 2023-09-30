const express = require('express');
const ControllerCliente = require("../controllers/clientes");

const controller = new ControllerCliente();
const router = express.Router();

router.get('/api/clientes/', controller.PegarTodos);
router.get('/api/cliente/:id', controller.PegarUm);
router.post('/api/cliente', controller.Add);
router.put('/api/cliente/:id', controller.Update);
router.delete('/api/cliente/:id', controller.Delete);

module.exports = router;