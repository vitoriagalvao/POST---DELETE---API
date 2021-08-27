const express = require("express")
const router = express.Router()

router.get("/", (request,response) => {
    response.status(200).send(
        {
            "titulo": "Contatos-Reprograma",
            "version": "1.0.0",
            "mensagem": "Essa é a sua API de contatos, aproveite"
        }
    )
})

module.exports = router