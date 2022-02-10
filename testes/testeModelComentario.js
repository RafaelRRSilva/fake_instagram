const { sequelize, Comentario } = require('../models');

let promessa = Comentario.findAll();

promessa.then(
    dados => {
        console.log("Dados chegaram...");
        console.log("Fechando a conexão com o BD");
        sequelize.close();
    }
);

console.log("Já foi!");