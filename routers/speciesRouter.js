const express = require('express')
const Router = require('express').Router()
const speciesController = require ('../controllers/speciesController')

Router.get('/', speciesController.getSpecies)

module.exports = Router