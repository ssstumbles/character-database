const db = require('../db')
const { Species } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const species_seed = [
    {
        species_name: 'Elf',
        skill_primary: 'Spirituality',
    },
    {
        species_name: 'Orc',
        skill_pirmary: 'Sorcery'
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
}
await Species.insertMany(species_seed)

const run = async () => {
    await main()
    db.close()
}

run()