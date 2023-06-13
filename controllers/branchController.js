const { Branch } = require('../models')

const getBranches = async (req, res) => {
    const branches = await Branch.find({})
    res.json(branches)
}

module.exports = {
    getBranches
}
