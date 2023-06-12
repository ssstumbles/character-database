const { Schema } = require('mongoose')

const secondary = new Schema (
    {
        skill_secondary: { type: String, required: true },
        character: { type: Schema.Types.ObjectId, ref: 'character' }
    },
    { timestamps: true },
)

module.exports = secondary