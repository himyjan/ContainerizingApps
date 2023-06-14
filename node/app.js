const express = require('hyper-express')
const PORT = 3000

const app = new express.Server()

app.get('/', (req, res) => {
    res.send("Hello from node app")
})

app.listen(PORT).then(() => {
    console.log(`App is listening on port : ${PORT}`)
})