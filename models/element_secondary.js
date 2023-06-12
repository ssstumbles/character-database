const { Schema } = require('mongoose')

const elementSecondary = new Schema (
    {
        branch: { type: Schema.Types.ObjectId, ref: 'branch' },
        option_one: { type: Schema.Types.ObjectId, ref: 'option_one' },
        option_two: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = elementSecondary