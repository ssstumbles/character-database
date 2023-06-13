const { Species } = require('../models')

const getSpecies = async (req, res) => {
    const species_seed = await Species.find({})
    res.json(species_seed)
}

module.exports = {
    getSpecies
}