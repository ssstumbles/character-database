const { Schema } = require('mongoose')
const { Species } = require('./species')

const Branch = new Schema (
    {
        species_name: { type: String, required: true  },
        branch: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = Branch