const express = require('express')
const Router = require('express').Router()
const speciesController = require ('../controllers/speciesController')

Router.get('/', speciesController.getSpecies)
Router.get('/:id', speciesController.getSpeciesById)
Router.post('/', speciesController.createSpecies)
Router.put('/:id', speciesController.updateSpecies)
Router.delete('/:id', speciesController.deleteSpecies)

module.exports = Router