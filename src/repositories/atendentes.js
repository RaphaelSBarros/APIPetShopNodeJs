const Atendente = require("../models/atendentes");
const bcrypt = require('bcrypt')


class RepositoryAtendentes{

    async PegarUm(id){
        return Atendente.findOne({
            where: { id }
        });
    }

    async PegarUmPorEmail(email){
        return Atendente.findOne({
            where: { email }
        });
    }

    async PegarTodos(){
        return Atendente.findAll();
    }

    async Add(atendente, transaction){
        const hashSenha = await bcrypt.hash(atendente.senha, 10)
        atendente.senha = hashSenha;
        const result = await Atendente.create(
            pessoa,
            { transaction }
        )
        return result;
    }

    async Update(id, atendente){
        const result = await Atendente.update(pessoa, {
            where: { id }
        })

        return result
    }

    async Delete(id){

        return Atendente.destroy({
            where: { id }
        })
    }
}

module.exports = RepositoryAtendentes;