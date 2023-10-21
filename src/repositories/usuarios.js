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

    async Update(id, email, senha){
        return Usuario.update({
            email,
            senha
        },{
            where: { id }
        });
    }

    async Delete(id){
        return Usuario.destroy({
            where: { id }
        });
    }
}

module.exports = RepositoryUsuario;