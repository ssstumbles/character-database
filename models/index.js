const mongoose = require('mongoose')
const userSchema = require('./user')
const speciesSchema = require('./species')
const branchSchema = require('./branch')

const User = mongoose.model('User', userSchema)
const Species = mongoose.model('Species', speciesSchema)
const Branch = mongoose.model('Branch', branchSchema)

module.exports = {
    User,
    Species,
    Branch
}