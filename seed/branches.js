const db = require('../db')
const { Branch } = require('../models')
const Species = require('../models/species')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
//console.log(Species)
    //     const species = await Species.find({})
    // console.log(species)
const branches = [
        {
            species_name: 'Elf',
            branch: 'Lava'
        },
        {
            species_name: 'Elf',
            branch: 'Mountain'
        }, 
        {
            species_name: 'Orc',
            branch: 'Frost'
        },
        {
            species_name: 'Orc',
            branch: 'Dune'
        },
        {
            species_name: 'Sprite',
            branch: 'Mushroom'
        },
        {
            species_name: 'Sprite',
            branch: 'Twig'
        },
        {
            species_name: 'Sprite',
            branch: 'Grass'
        },
        {
            species_name: 'Mer',
            branch: 'Ocean'
        },
        {
            species_name: 'Mer',
            branch: 'Lagoon'
        },
        {
            species_name: 'Goblin',
            branch: 'Dock'
        },
        {
            species_name: 'Goblin',
            branch: 'Swamp'
        }
    ]
    await Branch.insertMany(branches)
    console.log('branches seeded')
// }   catch (error) {
//     console.error('error seeding branches', error)
}
// }

const run = async () => {
    await main()
    db.close()
}

run()