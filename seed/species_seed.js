const db = require('../db')
const { Species } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const species_seed = [
    {
        species_name: 'Elf',
        skill_primary: 'Spirituality',
        branch: "Lava",
        species_id:"64887ad4351b625b2cc44596"
    },
    {
        species_name: 'Orc',
        skill_primary: 'Sorcery'
    },
    {
        species_name: 'Sprite',
        skill_primary: 'Camouflauge'
    },
    {
        species_name: 'Mer',
        skill_primary: 'Agility'
    },
    {
        species_name: 'Goblin',
        skill_primary: 'Trickery'
    }
]

await Species.insertMany(species_seed)
}

const run = async () => {
    await main()
    db.close()
}

run()