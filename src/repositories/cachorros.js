const Cachorro = require("../models/cachorros");

class RepositoryCachorro{
    async PegarUm(id){
        return Cachorro.findOne({
            where: { id }
        });
    }

    async PegarTodos(){
        return Cachorro.findAll();
    }

    async Add(nome, idDono){
        return Cachorro.create({
            nome,
            idDono
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