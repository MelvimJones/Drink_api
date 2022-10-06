//Carreggar o model de produtos
const produto =  require("../model/produto")

//-------------# Funções controller ------------------

async function listaProdutos(req, res){
   
        //Buscar no banco
       const produtos = await produto.find({})

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