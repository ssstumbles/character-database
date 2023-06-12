const { Schema } = require('mongoose')

const Branch = new Schema (
    {
        branch: { type: String, required: true },
        character: { type: Schema.Types.ObjectId, ref: 'charcter' }
    },
    { timestamps: true }
)

module.exports = Branch