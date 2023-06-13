const db = require('../db')
const { secondaryElement } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const secondary_elements = [
    {
        species: Species[0]._id,
        branch: Branch[0]._id,
        element_secondary: 'Stone'
    },
    {
        species: Species[0]._id,
        branch: Branch[0]._id,
        element_secondary: 'Metal'
    },
    {
        species: Species[0]._id,
        branch: Branch[0]._id,
        element_secondary: 'Metal'
    },
    {
        species: Species[0]._id,
        branch: Branch[1]._id,
        element_secondary: 'Cold'
    },
    {
        species: Species[1]._id,
        branch: Branch[0]._id,
        element_secondary: 'Cold'
    },
    {
        species: Species[1]._id,
        branch: Branch[1]._id,
        element_secondary: 'Air'
    },
    {
        species: Species[2]._id,
        branch: Branch[0]._id,
        element_secondary: 'Poison'
    },
    {
        species: Species[2]._id,
        branch: Branch[1]._id,
        element_secondary: 'Wood'
    },
    {
        species: Species[2]._id,
        branch: Branch[2]._id,
        element_secondary: 'Earth'
    },
    {
        species: Species[3]._id,
        branch: Branch[0]._id,
        element_secondary: 'Cold'
    },
    {
        species: Species[3]._id,
        branch: Branch[1]._id,
        element_secondary: 'Water'
    },
    {
        species: Species[3]._id,
        branch: Branch[2]._id,
        element_secondary: 'Air'
    },
    {
        species: Species[4]._id,
        branch: Branch[0]._id,
        element_secondary: 'Wood'
    },
    {
        species: Species[4]._id,
        branch: Branch[1]._id,
        element_secondary: 'Poison'
    },
]

}
await primaryElement.insertMany(primary_elements)

const run = async () => {
    await main()
    db.close()
}

run()