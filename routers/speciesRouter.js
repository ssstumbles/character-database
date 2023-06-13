const express = require('express')
const router = require('express').Router()
const speciesController = require ('../controllers/speciesController')

Router.get('/', speciesController.getSpecies)

module.exports = router