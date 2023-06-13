const express = require('express')
const router = require('express').Router()
const branchesController = require ('../controllers/branchController')

router.get('/', branchesController.getBranches)

module.exports = router