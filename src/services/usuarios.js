const RepositoryUsuario = require("../repositories/usuarios");

const repositorio = new RepositoryUsuario();

class ServiceUsuario{
    async PegarUmPorEmail(email){
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }

    async Add(email, senha, permissao){
        console.log(email, senha, permissao);
        return repositorio.Add(email, senha, permissao);
    }

    async Update(id, email, senha){
        if(email == "" || senha == ""){
            throw new Error("Favor preencher todos os dados");
        }else if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Update(id, email, senha);
    }

    async Delete(id){
        if(id < 0 || isNaN(id)){
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.Delete(id);
    }
}

module.exports = ServiceUsuario;