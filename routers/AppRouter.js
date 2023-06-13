const express = require('express')
const Router = express.Router()
const SpeciesRouter = require ('./speciesRouter')
const CharacterRouter = require('./characterRouter')
const BranchRouter = require('./branchRouter')

Router.use('/species_seed', SpeciesRouter)
Router.use('/characters', CharacterRouter)
Router.use('./branches', BranchRouter)

module.exports = Router