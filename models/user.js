const { Schema } = require('mongoose')

const makeSchema = new Schema (
    {
        user_id: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = makeSchema