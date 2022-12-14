//carragando o express na aplicacao
const express = require("express")
const cors = require("cors")
const produtoRouter = require('./router/produto-router')
const authRouter = require("./router/auth-router")

const jwt = require('jsonwebtoken');


//Conexao
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:478282019402@cluster0.3yotkzw.mongodb.net/drinkht?retryWrites=true&w=majority');




const app = express() // invocando a function do express

const port = 3000 // definindo uma porta para o serviço

//conectando a funcao cors com o express
app.use(cors())
//reconhecendo os request que possui json no body
app.use(express.json())

//-------------# ROTAS #-----------------

// invocando a funcao get para configurar a rota http pelo método get
app.get("/", (req, res) => {
    res.send("API DRINK HT V1.0.0 -!")
})
app.use("/produtos", produtoRouter)

app.use("/auth", authRouter)



//----------------Inicializacao de servidor------------

//server
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})