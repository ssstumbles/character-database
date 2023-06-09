const db = require('../db')
const { User, Species, Branch } = require('/..models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
// i dunno how to do users; seed species' first
    // const users = [
    //     {
    //         user_id: 'ref'
    //     },
    //     {
    //         password: 'password'
    //     },
    //     {
    //         email: 'email'
    //     }
    // ]

    const species_seed = [
        {
            species_name: 'Elf',
            skill_primary: 'Spirituality',
            skill_secondary: 'Sorcery',
            species_id: 'Shaman Mage'
        },
        {
           species_name: 'Elf',
           skill_primary: 'Spirituality',
           skill_secondary: 'Force',
           species_id: 'Shaman Brute'
        },
        {
            species_name: 'Orc',
            skill_primary: 'Sorcery',
            skill_secondary: 'Force',
            species_id: 'Mage Brute'
         },
         {
            species_name: 'Orc',
            skill_primary: 'Sorcery',
            skill_secondary: 'Agility',
            species_id: 'Mage Sneak'
         },
         {
            species_name: 'Sprite',
            skill_primary: 'Camouflauge',
            skill_secondary: 'Spirituality',
            species_id: 'Sneak Shaman'
         },
         {
            species_name: 'Sprite',
            skill_primary: 'Camouflauge',
            skill_secondary: 'Trickery',
            species_id: 'Sneak Trickster'
         },
         {
            species_name: 'Mer',
            skill_primary: 'Agility',
            skill_secondary: 'Trickery',
            species_id: 'Rogue Trickster'
         },
         {
            species_name: 'Mer',
            skill_primary: 'Agility',
            skill_secondary: 'Force',
            species_id: 'Rogue Brute'
         },
         {
            species_name: 'Goblin',
            skill_primary: 'Trickery',
            skill_secondary: 'Camouflage',
            species_id: 'Trickster Sneak'
         },
         {
            species_name: 'Goblin',
            skill_primary: 'Trickery',
            skill_secondary: 'Agility',
            species_id: 'Trickster Rogue'
         },
    ]

    const branches = [
        {
            species_name: 'Elf',
            species_id: 'Trickster Rogue',
            element_primary: 'Fire',
            element_secondary: 'Stone',
            element_id: 'Fire, Stone',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
            //height: 0
        },
        {
            species_name: '',
            species_id: '',
            element_primary: '',
            element_secondary: '',
            element_id: '',
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