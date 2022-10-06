const mongoose = require('mongoose');

//  Criando um Schema ("collection")

const ProdutoSchema = new mongoose.Schema( { descricao:String, preco: Number, imagem: String} )

//  Criando o Modelo
const Produto = mongoose.model ("produto",ProdutoSchema )

//Expo
module.exports = Produto
