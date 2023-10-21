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
}

module.exports = ServiceUsuario;