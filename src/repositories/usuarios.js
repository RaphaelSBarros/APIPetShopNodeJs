const Usuario = require("../models/usuarios");
const bcrypt = require('bcrypt')


class RepositoryUsuario{

    async PegarUmPorEmail(email){
        return Usuario.findOne({
            where: { email }
        });
    }

    async Add(email, senha, permissao){
        const hashSenha = await bcrypt.hash(senha, 10);
        senha = hashSenha;
        console.log(email, hashSenha, permissao);
        return Usuario.create({
            email,
            senha,
            permissao
        });
    }
}

module.exports = RepositoryUsuario;