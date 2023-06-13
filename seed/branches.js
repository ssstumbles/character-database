const db = require('../db')
const { Branch } = require('../models')
const  Species = require('../models/species')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
        const species = await Species.find({})

const branches = [
        {
            species_name: species[0]._id,
            species_branch: 'Lava'
        },
        {
            species_name: species[0]._id,
            species_branch: 'Mountain'
        }, 
        {
            species_name: species[1]._id,
            species_branch: 'Frost'
        },
        {
            species_name: species[1]._id,
            species_branch: 'Dune'
        },
        {
            species_name: species[2]._id,
            species_branch: 'Mushroom'
        },
        {
            species_name: species[2]._id,
            species_branch: 'Twig'
        },
        {
            species_name: species[2]._id,
            species_branch: 'Grass'
        },
        {
            species_name: species[3]._id,
            species_branch: 'Ocean'
        },
        {
            species_name: species[3]._id,
            species_branch: 'Lagoon'
        },
        {
            species_name: species[4]._id,
            species_branch: 'Dock'
        },
        {
            species_name: species[4]._id,
            species_branch: 'Swamp'
        }
    ]
    await Branch.insertMany(branches)
    console.log('branches seeded')
}   catch (error) {
    console.error('error seeding branches', error)
}
}

const run = async () => {
    await main()
    db.close()
}

run()