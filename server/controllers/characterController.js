const masterCharacterList = []
id = 0

module.exports = {
    getAllCharacters: (req, res) => {
        res.status(200).send(masterCharacterList)
    },
    getCharacter: (req, res) => {
        const {id} = req.params
        const character = masterCharacterList.find(character => character.id === +id)
        res.status(200).send(character)
    },
    addCharacter: (req, res) => {
        const newCharacter = {...req.body}
        newCharacter.id = id
        id++
        masterCharacterList.push(newCharacter)
        res.status(200).send(masterCharacterList)
    },
    editCharacter: (req, res) => {
        const {id} = req.params
        const {name, image} = req.body
        const index = masterCharacterList.findIndex(character => character.id === +id)
        const currentCharacter = {...masterCharacterList[index]}
        masterCharacterList[index] = {
            id: +id,
            name: name || currentCharacter.name,
            image: image || currentCharacter.image
        }
        res.status(200).send(masterCharacterList)
    },
    deleteCharacter: (req, res) => {
        const {id} = req.params
        const index = masterCharacterList.findIndex(character => character.id === +id)
        masterCharacterList.splice(index, 1)
        res.status(200).send(masterCharacterList)
    }
}
