import express from 'express'

const app = express()
app.use(express.json())

/*
    1- Tipo de Rota / Método HTTP
    2- Endereço
*/

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)
