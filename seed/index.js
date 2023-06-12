const db = require('../db')
const { User, Species, Branch } = require('/..models')

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

    const secondary_skill = [
        {
            secondary_skill: 'Force'
        },
        {
            secondary_skill: 'Spirituality'
        },
        {
            secondary_skill: 'Sorcery'
        },
        {
            secondary_skill: 'Camouflauge'
        },
        {
            secondary_skill: 'Agility'
        },
        {
            secondary_skill: 'Trickery'
        },
    ]

    const branch = [
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

    const primaryElement = [
        {
            species: Species[0]._id,
            branch: Branch[0]._id,
            element_primary: 'Fire',
        },
        {
            species: Species[0]._id,
            branch: Branch[1]._id,
            element_primary: 'Stone'
        },
        {
            species: Species[1]._id,
            branch: Branch[0]._id,
            element_primary: 'Cold'
        },
        {
            species: Species[1]._id,
            branch: Branch[1]._id,
            element_primary: 'Air'
        },
        {
            species: Species[2]._id,
            branch: Branch[0]._id,
            element_primary: 'Poison'
        },
        {
            species: Species[2]._id,
            branch: Branch[1]._id,
            element_primary: 'Wood'
        },
        {
            species: Species[2]._id,
            branch: Branch[2]._id,
            element_primary: 'Earth'
        },
        {
            species: Species[3]._id,
            branch: Branch[0]._id,
            element_primary: 'Cold'
        },
        {
            species: Species[3]._id,
            branch: Branch[1]._id,
            element_primary: 'Water'
        },
        {
            species: Species[3]._id,
            branch: Branch[2]._id,
            element_primary: 'Air'
        },
        {
            species: Species[4]._id,
            branch: Branch[0]._id,
            element_primary: 'Wood'
        },
        {
            species: Species[4]._id,
            branch: Branch[1]._id,
            element_primary: 'Poison'
        },
    ]

    const secondaryElement = [
        {
           // species: Species[0]._id,
           // branch: Branch[0]._id,
            element_primary: primaryElement[0],
            secondary_element: 'Stone'
        },
        {
            species: Species[0]._id,
            branch: Branch[0]._id,
        },
        {
            species: Species[0]._id,
            branch: Branch[1]._id,
            element_primary: 'Stone'
        },
        {
            species: Species[1]._id,
            branch: Branch[0]._id,
            element_primary: 'Cold'
        },
        {
            species: Species[1]._id,
            branch: Branch[1]._id,
            element_primary: 'Air'
        },
        {
            species: Species[2]._id,
            branch: Branch[0]._id,
            element_primary: 'Poison'
        },
        {
            species: Species[2]._id,
            branch: Branch[1]._id,
            element_primary: 'Wood'
        },
        {
            species: Species[2]._id,
            branch: Branch[2]._id,
            element_primary: 'Earth'
        },
        {
            species: Species[3]._id,
            branch: Branch[0]._id,
            element_primary: 'Cold'
        },
        {
            species: Species[3]._id,
            branch: Branch[1]._id,
            element_primary: 'Water'
        },
        {
            species: Species[3]._id,
            branch: Branch[2]._id,
            element_primary: 'Air'
        },
        {
            species: Species[4]._id,
            branch: Branch[0]._id,
            element_primary: 'Wood'
        },
        {
            species: Species[4]._id,
            branch: Branch[1]._id,
            element_primary: 'Poison'
        },
    ]

    await Species.insertMany(species_seed)
    console.log("species' added")
    await secondaryElement.insertMany(element_secondary)
    console.log('secondary skill added')
    await Branch.insertMany(branches)
    console.log('branches added')
    await primaryElement.insertMany(element_primary)
    console.log('primary element seeded')
    await secondaryElement.insertMany(element_secondary)
    console.log('secondary element seeded')

}

const run = async () => {
    await main()
    db.close()
}

run()