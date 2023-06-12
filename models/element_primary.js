const { Schema } = require('mongoose')

const elementPrimary = new Schema (
    {
        branch: { type: Schema.Types.ObjectId, ref: 'branch' },
        option_1: { type: String, required: true},
        option_2: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = elementPrimary