const express = require('express')
const Router = require('express').Router()
const characterController = require ('../controllers/characterController')

Router.get('/', characterController.getCharacters)
Router.get('/:id', characterController.getCharactersById)
Router.post('/', characterController.createCharacters)
Router.put('/:id', characterController.updateCharacters)
Router.delete('/:id', characterController.deleteCharacters)

module.exports = Router