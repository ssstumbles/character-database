const { Character } = require('../models')

const getCharacter = async (req, res) => {
    const characters = await Characer.find({})
    res.json(characters)
}

module.exports = {
    getCharacter
}
