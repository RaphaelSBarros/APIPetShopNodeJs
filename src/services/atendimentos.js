const RepositoryAtendimento = require("../repositories/atendimentos");

const repositorio = new RepositoryAtendimento;

class ServiceAtendimento{
    
    async PegarUm(idAtendimentos){
        return repositorio.PegarUm(idAtendimentos);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async Add(horario, valor, idCachorro, status){
        if(horario == "" || !valor || isNaN(idCachorro || status == "")){
            throw new Error("Favor preencher todos os dados");
        }
        repositorio.Add(horario, valor, idCachorro, status);
    }

    async Update(idAtendimentos, valor,idCachorro, status){
        if(!valor || isNaN(idCachorro) || status == ""){
            throw new Error("Favor preencher todos os dados");
        }else if(idAtendimentos < 0 || isNaN(idAtendimentos)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Update(idAtendimentos, valor, idCachorro, status);
    }

    async Delete(idAtendimentos){
        if(idAtendimentos < 0 || isNaN(idAtendimentos)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Delete(idAtendimentos);
    }
}

module.exports = ServiceAtendimento;