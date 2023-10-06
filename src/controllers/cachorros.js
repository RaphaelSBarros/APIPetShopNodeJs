const ServiceCachorro = require("../services/cachorros");

const servico = new ServiceCachorro();

class ControllerCachorro{

    async PegarUm(req, res){
        try{
            const result = await servico.PegarUm(req.params.id);

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }

    async PegarTodos(req, res){
        try{
            const result = await servico.PegarTodos();

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao listar nomes" })
        }
    }

    async Add(req, res){
        try{
            servico.Add(req.body.nome, req.body.dono);

            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao adicionar cachorro" })
        }
    }

    async Update(req, res){
        try{
            servico.Update(req.params.id, req.body.nome);

            res.status(200).json({
                message: "Alterado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }

    async Delete(req, res){
        try{
            servico.Delete(req.params.id);
        
            res.status(200).json({
                message: "Deletado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}

module.exports = ControllerCachorro;