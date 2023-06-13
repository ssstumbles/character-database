const { Schema } = require('mongoose')

const Character = new Schema (
    {
        species__name: { type: String, required:true },
        species: { type: String, required: true},
        branch: { type:String, required: true},
        // element_primary: {  type: String, required: true},
        // element_secondary: { type:String, required: true}

    },
    { timestamps: true },
)

module.exports = Character