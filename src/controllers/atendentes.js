const ServiceAtendente = require("../services/clientes");

const servico = new ServiceAtendente();

class ControllerAtendente{

    async Login(req, res){
        const { email, senha } = req.body;

        const { dataValues: atendente } = await servico.PegarUmPorEmail(email);

        if(!atendente){
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        if(!(await bcrypt.compare(senha, pessoa.senha))){
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        const token = jwt.sign(
            { id: atendente.id, email: atendente.email },
            config.secret
        );

        res.json({ message: 'Login Bem-Sucedido', token });
    }

    async PegarUm(req, res){
        try{
            const result = await servico.PegarUm(req.params.id);

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao pegar atendente" })
        }
    }

    async PegarTodos(req, res){
        try{
            const result = await servico.PegarTodos();

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao listar atendentes" })
        }
    }

    async Add(req, res){
        try{
            servico.Add(req.body.nome);

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

module.exports = ControllerAtendente;