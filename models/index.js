const mongoose = require('mongoose')
const character = require('./character')
const branch = require('./branch')
const species = require('./species')
// const secondary  = require('./secondary')
// const element_primary = require('./element_primary')
// const element_secondary = require('./element_secondary')

const Character = mongoose.model('Character', character)
const Species = mongoose.model('Species', species)
// const Secondary = mongoose.model('Secondary', secondary)
const Branch = mongoose.model('Branch', branch)
// const primaryElement = mongoose.model('Primary Element', element_primary)
// const secondaryElement = mongoose.model('Secondary Element', element_secondary)

module.exports = {
    Character,
    Species,
    // Secondary,
    Branch,
    // primaryElement,
    // secondaryElement
}