const { Usuario } = require('../models')

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },
    addRegistro: async (req,res) => {
        
        // res.send(req.body);

        // Capturando nome, email e senha da requisição
        let {nome, email, senha} = req.body;

        // Adicionar um novo usuário no BD
        let usuario = await Usuario.create(
            {nome, email, senha}
        )

        // Direcionar o usuário para a rota '/home'
        res.redirect('/home');

    }
}

module.exports = AuthController;