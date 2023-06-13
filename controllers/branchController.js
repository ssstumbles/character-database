const { Branch } = require('../models')

const getBranch = async (req, res) => {
    const branches = await Branch.find({})
    res.json(branches)
}

module.exports = {
    getBranch
}
