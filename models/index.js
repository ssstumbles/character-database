const mongoose = require('mongoose')
const character = require('./character')
const species = require('./species')
const secondary  = require('./secondary')
const element_primary = require('./element_primary')
const element_secondary = require('./element_secondary')

const Species = mongoose.model('Species', species)
const Secondary = mongoose.model('Secondary', secondary)
const Branch = mongoose.model('Branch', branch)
const element_primary = mongoose.model('ElementOne', element_primary)
const element_secondary = mongoose.model('ElementTwo', element_secondary)

module.exports = {
    Species,
    Secondary,
    Branch,
    ElementOne,
    ElementTwo
}