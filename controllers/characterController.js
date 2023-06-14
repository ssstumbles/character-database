const { Character } = require('../models')

const getCharacters = async (req, res) => {
    const characters = await Character.find({})
    res.json(characters)
}

module.exports = {
    getCharacters
}