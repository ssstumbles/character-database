const { Schema } = require('mongoose')

const elementPrimary = new Schema (
    {
        branch: { type: Schema.Types.ObjectId, ref: 'branch' },
        species: { type: Schema.Types.ObjectId, ref: 'species' },
        element_primary: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = elementPrimary