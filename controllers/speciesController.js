const { Species } = require('../models')

const getSpecies = async (req, res) => {
    const species_seed = await Species.find({})
    res.json(species_seed)
}

const getSpeciesById = async (req,res) => {
    try{
    const { id } = req.params
    const species = await Species.findById(id)
    if(!species) throw Error('platfspeciesorms not found')
    res.json(species)
    }catch (e){
        console.log(e)
        res.send('species not found')
    }
}

const createSpecies = async (req, res) => {
    try {
        const species = await new Species(req.body)
        await species.save()
            return res.status(201).json({
                species,
            })
        
        } catch (error) {
            return res.status(500).json({ error:error.message })
        }
}

const updateSpecies = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSpecies = await Species.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!updatedSpecies) {
          return res.status(404).send('Species not found!');
        }
    
        return res.status(200).json(updatedSpecies);
      } catch (error) {
        return res.status(500).send(error.message);
      }
}


const deleteSpecies = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Species.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("species deleted");
        }
        throw new Error("not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getSpecies,
    getSpeciesById,
    createSpecies,
    updateSpecies,
    deleteSpecies
}