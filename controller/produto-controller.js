//Carreggar o model de produtos
const Produto =  require("../model/produto")

//-------------# Funções controller ------------------

async function listaProdutos(req, res){
   
        //Buscar no banco
       const produtos = await Produto.find({})

       res.json(produtos)

}

async function cadastraProduto(req, res){
   //montando objeto com os dados
     let prod = new Produto(req.body)
    //incluindo objeto no array
     prodSalvo= await  prod.save() ;
     //devolvendo um json de resposta para o client 
     res.json(prodSalvo)
    // res.json({mensagem:"cadastrado com sucesso"}) 
 }

async function deleteProduto(req, res){

   

        let id =  req.query.id
        
        await Produto.findByIdAndRemove(id)

         res.status(200)
         res.send("removido indice:"+ id)
     
}
async function alteraProduto(req, res){
    
        let id = req.query.id
        let prod =  req.body
    
         await Produto.findByIdAndUpdate(id, prod)
        res.send("Alterado com sucesso: " )
    
}


module.exports =  {listaProdutos , cadastraProduto , deleteProduto, alteraProduto}