let produtos =[]
/*
//Trazer no banco
//----Conectando com o banco -----//
async function init(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://admin:BuAzY37256fps3t2@cluster0.3yotkzw.mongodb.net/drinkht?retryWrites=true&w=majority');

    //Criando um Schema ("collection")

    const ProdutoSchema = new mongoose.Schema( { descricao:String, preco: Number, imagem: String} )

    // Criando o Modelo
    const Produto = mongoose.model ("produto",ProdutoSchema )

    //Busca na collecao de produtos
     produtos = await Produto.find({})

    console.log(produtos) 
}

// ----------------- REPOSITORY------------------
init()

           */                     


//-------------# Funções controller ------------------

function listaProdutos(req, res){
   
    res.json(produtos)

}

function cadastraProduto(req, res){
   
    //incluindo objeto no array
     produtos.push(req.body) 
     //devolvendo um json de resposta para o client 
     res.json(req.body)
    // res.json({mensagem:"cadastrado com sucesso"}) 
 }

function deleteProduto(req, res){

   

        let indice =  req.query.i
        produtos.splice(indice,1)
     
        
         res.status(200)
         res.send("removido indice:"+ indice)
     
}

function alteraProduto(req, res){
    
        let indice = req.query.i
        let produto =  req.body
    
        produtos[indice] = produto
        res.send("Alterado com sucesso")
    
}


module.exports =  {listaProdutos , cadastraProduto , deleteProduto, alteraProduto}