const jwt = require('jsonwebtoken');
const config = require('../config');

function authMiddleware(req, res, next){
    const token = req.headers['authorization'];

    if (!token){
        return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: "Token inválido" });
        }

        req.session = decoded;

        next();
    });
}

function authFuncionario(req, res, next){
    const token = req.headers['authorization'];

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: "Token inválido" });
        }

        if(decoded.permissao != 2 && decoded.permissao != 0){
            return res.status(401).json({ message: "Acesso negado" });
        }

        req.session = decoded;

        next();
    });
}

function authCliente(req, res, next){
    const token = req.headers['authorization'];

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: "Token inválido" });
        }

        if(decoded.permissao != 1 && decoded.permissao != 0){
            return res.status(401).json({ message: "Acesso negado" });
        }

        req.session = decoded;

        next();
    });
}

function authAdm(req, res, next){
    const token = req.headers['authorization'];

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).json({ message: "Token inválido" });
        }

        if(decoded.permissao != 0){
            return res.status(401).json({ message: "Acesso negado" });
        }

        req.session = decoded;

        next();
    });
}


module.exports = {authMiddleware, authFuncionario, authAdm, authCliente};