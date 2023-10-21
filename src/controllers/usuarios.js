const ServiceUsuario = require("../services/usuarios");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("../config.js");

const servico = new ServiceUsuario();

class ControllerUsuario{

    async Login(req, res){
        const { email, senha } = req.body;

        const { dataValues: usuario } = await servico.PegarUmPorEmail(email);

        if(!usuario){
            return res.status(401).json({ message: "Credenciais inválidas1" });
        }
        console.log(usuario.senha, senha);
        if(!(await bcrypt.compare(senha, usuario.senha))){
            return res.status(401).json({ message: "Credenciais inválidas2" });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            config.secret
        );

        res.json({ message: 'Login Bem-Sucedido', token });
    }

    /*async AddAtendente(req, res){
        try{
            const { usuario } = req.body;

            await servico.Add(usuario);

            res.status(201).json({ message: "Adicionado com sucesso!" });
        }catch(error){
            if(error.parent.code === "ER_DUP_ENTRY"){
                res.status(500).json({ message: "Email já cadastrado!" });
            }
            res.status(500).json({ message:  "Erro ao cadastrar" });
        }
    }

    async AddCliente(req, res){
        try{
            const { usuario } = req.body;
            
            await servico.Add(usuario);

            res.status(201).json({ message: "Adicionado com sucesso!" });
        }catch(error){
            if(error.parent.code === "ER_DUP_ENTRY"){
                res.status(500).json({ message: "Email já cadastrado!" });
            }
            res.status(500).json({ message: "Erro ao cadastrar" });
        }
    }*/
}

module.exports = ControllerUsuario;