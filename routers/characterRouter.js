const express = require('express')
const Router = require('express').Router()
const characterController = require ('../controllers/characterController')

Router.get('/', characterController.getCharacters)

module.exports = Router