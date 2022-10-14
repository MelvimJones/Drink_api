const express = require("express")
const router = express.Router()

const jwt = require('jsonwebtoken');



router.post("/login", (req, res) => {
    let payload = {
        nome: req.body.nome,
        senha: req.body.senha
    }
    //gera token com tempo de validade
    let token = jwt.sign(payload, 'banana_maca', { expiresIn: 20 });
    res.send(token)
})

router.post("/verificar", (req, res) => {
    let decoded = jwt.verify(req.query.token, 'banana_maca');
    res.json(decoded)

})

module.exports = router