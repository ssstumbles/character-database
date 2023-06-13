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
        {
            species_name: "Elf",
            skill_primary: "Spirituality",
            branch: "Mountain",
            species_id: "64887ad4351b625b2cc44596"
        },
        {
            species_name: "Orc",
            skill_primary: "Sorcery",
            branch: "Frost",
            species_id: "64887ad4351b625b2cc44597"
        },
        {
            species_name: "Orc",
            skill_primary: "Sorcery",
            branch: "Dune",
            species_id: "64887ad4351b625b2cc44597"
        },
        {
            species_name: "Sprite",
            skill_primary: "Camouflage",
            branch: "Mushroom",
            species_id: "64887ad4351b625b2cc44598"
        },
        {
            species_name: "Sprite",
            skill_primary: "Camouflage",
            branch: "Twig",
            species_id: "64887ad4351b625b2cc44598"
        },
        {
            species_name: "Sprite",
            skill_primary: "Camouflage",
            branch: "Grass",
            species_id: "64887ad4351b625b2cc44598"
        },
        {
            species_name: "Mer",
            skill_primary: "Agility",
            branch: "Ocean",
            species_id: "64887ad4351b625b2cc44599"
        },
        {
            species_name: "Mer",
            skill_primary: "Agility",
            branch: "Lagoon",
            species_id: "64887ad4351b625b2cc44599"
        },
        {
            species_name: "Mer",
            skill_primary: "Agility",
            branch: "River",
            species_id: "64887ad4351b625b2cc44599"
        },

        {
            species_name: "Goblin",
            skill_primary: "Trickery",
            branch: "Dock",
            species_id: "64887ad4351b625b2cc4459a"
        },
        {
            species_name: "Goblin",
            skill_primary: "Trickery",
            branch: "Swamp",
            species_id: "64887ad4351b625b2cc4459a"
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