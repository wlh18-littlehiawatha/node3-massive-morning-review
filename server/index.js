const express = require("express")
const cors = require("cors")
const cc = require("./controllers/characterController")

const app = express()
const SERVER_PORT = 3322

app.use(cors())
app.use(express.json())

app.get('/api/characters', cc.getAllCharacters)
app.get('/api/character/:id', cc.getCharacter)
app.post('/api/characters', cc.addCharacter)
app.put('/api/characters/:id', cc.editCharacter)
app.delete('/api/characters/:id', cc.deleteCharacter)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))