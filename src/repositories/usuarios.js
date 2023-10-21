const Usuario = require("../models/usuarios");
const bcrypt = require('bcrypt')


class RepositoryUsuarios{

    async PegarUmPorEmail(email){
        return Usuario.findOne({
            where: { email }
        });
    }

    /*async Add(usuario, permissao){
        const hashSenha = await bcrypt.hash(usuario.senha, 10)
        usuario.senha = hashSenha;
        const result = await Usuario.create(
            usuario,
            permissao
        )
        return result;
    }*/
}

module.exports = RepositoryUsuarios;