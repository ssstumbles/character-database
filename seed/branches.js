const db = require('../db')
const { Branch } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const branches = [
    {
        species_name: Species[0]._id,
        species_branch: 'Lava'
    },
    {
        species_name: Species[0]._id,
        species_branch: 'Mountain'
    },
    {
        species_name: Species[1]._id,
        species_branch: 'Frost'
    },
    {
        species_name: Species[1]._id,
        species_branch: 'Dune'
    },
    {
        species_name: Species[2]._id,
        species_branch: 'Mushroom'
    },
    {
        species_name: Species[2]._id,
        species_branch: 'Twig'
    },
    {
        species_name: Species[2]._id,
        species_branch: 'Grass'
    },
    {
        species_name: Species[3]._id,
        species_branch: 'Ocean'
    },
    {
        species_name: Species[3]._id,
        species_branch: 'Lagoon'
    },
    {
        species_name: Species[4]._id,
        species_branch: 'Dock'
    },
    {
        species_name: Species[4]._id,
        species_branch: 'Swamp'
    }
]
}
await Branch.insertMany(branches)

const run = async () => {
    await main()
    db.close()
}

run()