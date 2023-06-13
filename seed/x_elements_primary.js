// const db = require('../db')
// const { primaryElement } = require('../models')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {


// const primary_elements = [
//     {
//         species: Species[0]._id,
//         branch: Branch[0]._id,
//         element_primary: 'Fire',
//     },
//     {
//         species: Species[0]._id,
//         branch: Branch[1]._id,
//         element_primary: 'Stone'
//     },
//     {
//         species: Species[1]._id,
//         branch: Branch[0]._id,
//         element_primary: 'Cold'
//     },
//     {
//         species: Species[1]._id,
//         branch: Branch[1]._id,
//         element_primary: 'Air'
//     },
//     {
//         species: Species[2]._id,
//         branch: Branch[0]._id,
//         element_primary: 'Poison'
//     },
//     {
//         species: Species[2]._id,
//         branch: Branch[1]._id,
//         element_primary: 'Wood'
//     },
//     {
//         species: Species[2]._id,
//         branch: Branch[2]._id,
//         element_primary: 'Earth'
//     },
//     {
//         species: Species[3]._id,
//         branch: Branch[0]._id,
//         element_primary: 'Cold'
//     },
//     {
//         species: Species[3]._id,
//         branch: Branch[1]._id,
//         element_primary: 'Water'
//     },
//     {
//         species: Species[3]._id,
//         branch: Branch[2]._id,
//         element_primary: 'Air'
//     },
//     {
//         species: Species[4]._id,
//         branch: Branch[0]._id,
//         element_primary: 'Wood'
//     },
//     {
//         species: Species[4]._id,
//         branch: Branch[1]._id,
//         element_primary: 'Poison'
//     }
// ]
// }
// await primaryElement.insertMany(primary_elements)

// const run = async () => {
//     await main()
//     db.close()
// }

// run()