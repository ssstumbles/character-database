let url = `https://localhost:3001`


const getSpecies = async () => {
const pullSpecies = await axios.get('http://localhost:3001/API/species_seed')
    console.log(pullSpecies)
}
getSpecies()

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