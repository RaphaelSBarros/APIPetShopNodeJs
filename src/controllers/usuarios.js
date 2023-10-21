const ServiceUsuario = require("../services/usuarios");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("../config.js");

const servico = new ServiceUsuario();

class ControllerUsuario{

    async Login(req, res){
        try{
        const { email, senha } = req.body;

        const { dataValues: usuario } = await servico.PegarUmPorEmail(email);

        if(!usuario){
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        if(!(await bcrypt.compare(senha, usuario.senha))){
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, permissao: usuario.permissao },
            config.secret
        );

        res.json({ message: 'Login Bem-Sucedido', token });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    async AddAtendente(req, res){
        try{
            await servico.Add(req.body.email, req.body.senha, 2);

            res.status(201).json({ message: "Adicionado com sucesso!" });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    async AddCliente(req, res){
        try{
            await servico.Add(req.body.email, req.body.senha, 1);

            res.status(201).json({ message: "Adicionado com sucesso!" });
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }

    async Update(req, res){
        try{
            servico.Update(req.params.id, req.body.email, req.body.senha);

            res.status(200).json({
                message: "Alterado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao alterar" });
        }
    }

    async Delete(req, res){
        try{
            servico.Delete(req.params.id);
            res.status(200).json({
                message: "Deletado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao deletar" });
        }
    }
}

module.exports = ControllerUsuario;