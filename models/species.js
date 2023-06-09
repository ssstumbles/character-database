const { Schema } = require('mongoose')

const speciesSchema = new Schema (
    {
        species_name: { type: String, required: true },
        skill_primary: { type: String, required: true },
        skill_secondary: { type: String, required: true },
        species_id: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = speciesSchema