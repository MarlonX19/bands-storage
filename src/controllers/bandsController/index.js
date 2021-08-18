const { bandsServices } = require('../../services')

async function Store(req, res) {    

    const response = await bandsServices.Store()

    res.json({ value: response })
}

function Delete(req, res) {

    res.send({ value: 'deleted' })
}

module.exports = bandsController = {
    Store,
    Delete
}