const express = require('express')
const router = require('express').Router()
const branchesController = require ('../controllers/branchController')

router.get('/', branchesController.getBranches)
router.get('/:id', branchesController.getBranchesById)
router.post('/', branchesController.createBranches)
router.put('/:id', branchesController.updateBranches)
router.delete('/:id', branchesController.deleteBranches)

module.exports = router