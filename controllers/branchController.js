const { Branch } = require('../models')

const getBranches = async (req, res) => {
    const branches = await Branch.find({})
    res.json(branches)
}

const getBranchesById = async (req,res) => {
    try{
    const { id } = req.params
    const branches = await Branch.findById(id)
    if(!branches) throw Error('branches not found')
    res.json(branches)
    }catch (e){
        console.log(e)
        res.send('branches not found')
    }
}

const createBranches = async (req, res) => {
    try {
        const branches = await new Branch(req.body)
        await branches.save()
            return res.status(201).json({
                branches,
            })
        
        } catch (error) {
            return res.status(500).json({ error:error.message })
        }
}

const updateBranches = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBranches = await Branch.findByIdAndUpdate(id, req.body, { new: true });
    
        if (!updatedBranches) {
          return res.status(404).send('branches not found!');
        }
    
        return res.status(200).json(updatedBranches);
      } catch (error) {
        return res.status(500).send(error.message);
      }
}


const deleteBranches = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Branch.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("branches deleted");
        }
        throw new Error("not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    getBranches,
    getBranchesById,
    createBranches,
    updateBranches,
    deleteBranches
}