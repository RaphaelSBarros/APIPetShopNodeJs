const Atendimento = require("../models/atendimentos");
const Cachorro = require("../models/cachorros");

class RepositoryAtendimento{
    async PegarUm(idAtendimentos){
        return Atendimento.findOne({
            where: { idAtendimentos },
            include: [ Cachorro ]
        });
    }

    async PegarTodos(){
        return Atendimento.findAll();
    }

    async Add(horario, valor, idCachorro, status){
        return Atendimento.create({
            horario,
            valor,
            idCachorro,
            status
        });
    }

    async Update(idAtendimentos, valor,idCachorro, status){
        return Atendimento.update({
            valor,
            idCachorro,
            status
        }, {
            where: { idAtendimentos }
        });
    }

    async Delete(idAtendimentos){
        return Atendimento.destroy({
            where: { idAtendimentos }
        });
    }
}

module.exports = RepositoryAtendimento;