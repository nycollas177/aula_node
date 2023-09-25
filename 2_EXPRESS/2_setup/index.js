const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("meu back-end está funcionando!")
})

app.listen(3000, () => {
    console.log("Servidor rodando a porta 3000!")
})