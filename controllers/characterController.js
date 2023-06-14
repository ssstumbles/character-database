const { Character } = require('../models')

const getCharacters = async (req, res) => {
    const characters = await Character.find({})
    res.json(characters)
}

const getCharactersById = async (req,res) => {
    try{
    const { id } = req.params
    const characters = await Character.findById(id)
    if(!characters) throw Error('characters not found')
    res.json(characters)
    }catch (e){
        console.log(e)
        res.send('characters not found')
    }
}

const createCharacters = async (req, res) => {
    try {
        const characteres = await new Character(req.body)
        await characters.save()
            return res.status(201).json({
                characters,
            })
        
        } catch (error) {
            return res.status(500).json({ error:error.message })
        }
}

const updateCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCharacters = await Character.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!updatedCharacters) {
          return res.status(404).send('branches not found!');
        }
    
        return res.status(200).json(updatedCharacters);
      } catch (error) {
        return res.status(500).send(error.message);
      }
}


const deleteCharacters = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Character.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("branches deleted");
        }
        throw new Error("not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getCharacters,
    getCharactersById,
    createCharacters,
    updateCharacters,
    deleteCharacters
}