import express, { application } from 'express'

const app = express()

const port = 9000

app.use('/', (req, res) => {
    res.json({message: "Hello From Express App"})
})

app.listen(port, () => {
    console.log('Starting Server in port' + port)
})