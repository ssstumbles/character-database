const { Schema } = require('mongoose')

const makeSchema = new Schema (
    {
        species_id: { ref },
        branch_name: { type: String, required: true },
        elmnt_primary: { type: String, required: true },
        elmnt_secondary: { type: String, required: true },
        height: { type: Number, required: true },
        branch_id: {type: Number, required: true }

    },
    { timestamps: true }
)

module.exports = makeSchema