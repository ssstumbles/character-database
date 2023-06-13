const db = require('../db')
const { Species, Branch } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const characters = [
        {
        species_name: "Elf",
        skill_primary: "Spirituality",
        branch: "Lava",
        species_id: "64887ad4351b625b2cc44596"
        },

    ]
await Branch.insertMany(characters)
console.log('characters seeded')
}
const run = async () => {
await main()
db.close()
}

run()