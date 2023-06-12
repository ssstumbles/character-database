const { Schema } = require('mongoose')

const Species = new Schema (
    {
        species_name: { type: String, required: true },
        skill_primary: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = Species