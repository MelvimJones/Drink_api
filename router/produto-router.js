const express = require("express")
const router = express.Router()
const produtoController =  require('../controller/produto-controller')

//Lista de produtos
router.get("/", produtoController.listaProdutos) 
//cadastro de produtos
router.post("/", produtoController.cadastraProduto)
//exclusao de produtos
router.delete("/",produtoController.deleteProduto)
//alteracao de produtos
router.put("/", produtoController.alteraProduto)

module.exports =router