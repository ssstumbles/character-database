const express = require('express')
const router = require('express').Router()
const controller = require ('../controllers/characterController')

Router.get('/', charactersController.getCharacters)

module.exports = router