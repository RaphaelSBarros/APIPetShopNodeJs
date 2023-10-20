const Usuario = require("../models/usuarios");
const bcrypt = require('bcrypt')


class RepositoryUsuarios{

    async PegarUm(id){
        return Usuario.findOne({
            where: { id }
        });
    }

    async PegarUmPorEmail(email){
        return Usuario.findOne({
            where: { email }
        });
    }

    async PegarTodos(){
        return Usuario.findAll();
    }

    async Add(usuario, transaction){
        const hashSenha = await bcrypt.hash(usuario.senha, 10)
        usuario.senha = hashSenha;
        const result = await Usuario.create(
            pessoa,
            { transaction }
        )
        return result;
    }

    async Update(id, usuario){
        const result = await Usuario.update(pessoa, {
            where: { id }
        })

        return result
    }

    async Delete(id){

        return Usuario.destroy({
            where: { id }
        })
    }
}

module.exports = RepositoryUsuarios;