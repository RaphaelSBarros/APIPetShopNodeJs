const Cachorro = require("../models/cachorros");
const Atendimento = require("../models/atendimentos");

class RepositoryCachorro{

    async PegarUm(id){
        return Cachorro.findOne({
            where: { id },
            include: [ Atendimento ]
        });
    }

    async PegarTodos(){
        return Cachorro.findAll();
    }

    async Add(nome, dono){
        return Cachorro.create({
            nome,
            dono
        });
    }

    async Update(id, nome){
        return Cachorro.update({
            nome
        }, {
            where: { id }
        });
    }

    async Delete(id){
        return Cachorro.destroy({
            where: { id }
        });
    }
}

module.exports = RepositoryCachorro;