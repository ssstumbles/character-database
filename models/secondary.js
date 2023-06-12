const { Schema } = require('mongoose')

const secondary = new Schema (
    {
        skill_secondary: { type: String,}
    },
    { timestamps: true },
)

module.exports = secondary