let url = `https://localhost:3001`

const speciesAll = document.querySelector('.species-container')

const elfSelect = document.querySelector('#elf')
const orcSelect = document.querySelector('orc')
const spriteSelect = document.querySelector('sprite')
const merSelect  = document.querySelector('mer')
const speciesCard = document.querySelector('.species-container')

const getSpecies = async () => {
const pullSpecies = await axios.get('http://localhost:3001/API/species_seed')
    console.log(pullSpecies)
}
getSpecies()

// const speciesChoice = () => {
//     speciesAll.style.display = `flex`,

// }

// elfSelect.addEventListener('click', getSpecies = async () => {
//     let 
// }


// )
speciesCard.addEventListener('click', getSpecies = async () => {
    let 
})


const lavaElf = document.querySelector('#lava-elf')
const mountainElf = document.querySelector('#mountain-elf')
const frostOrc = document.querySelector('#frost-orc')
const duneOrc = document.querySelector('#dune-orc')
const mushroomSprite = document.querySelector("#mushroom.sprite")
const twigSprite = document.querySelector('#twig-sprite')
const grassSprite = document.querySelector('#grass-sprite')
const oceanMer = document.querySelector('#ocean-mer')
const lagoonMer = document.querySelector('#lagoon-mer')
const riverMer = document.querySelector('#river-mer')
const dockGoblin = document.querySelector('#dock-goblin')
const swampGoblin = document.querySelector('#swamp-goblin')

getBranches = async () => {
    const pullBranches = await axios.get('http://localhost:3001/API/branches')
    console.log(pullBranches)
}
getBranches()

getCharacters = async () => {
    const pullCharacters = await axios.get('http://localhost:3001/API/characters')
    console.log(pullCharacters)
}
getCharacters()