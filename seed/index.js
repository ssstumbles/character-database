const db = require('../db')
const { User, Species, Branch } = require('/..models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const species_seed = [
        {
            species_name: 'Elf',
            skill_primary: 'Spirituality',
            species_id: 
        },
    ]
    species_name: { type: String, required: true },
    skill_primary: { type: String, required: true },
    species_id:
    const branches = [
        {
            species_name: 'Elf',
            species_id: '
            element_primary: 
            element_secondary: 
            element_id: 
            //height: 0
        },
    ]
    

    await User.insertMany(users)
    console.log('user added')
    await Species.insertMany(species_seed)
    console.log("species' added")
    await Branch.insertMany(branches)
    console.log('branches added')
}

const run = async () => {
    await main()
    db.close()
}

run()