const { bandsRepository } = require('../../repositories')

async function Store() {    
    const response = await bandsRepository.Store();
 
    return response;
}

function Delete() {

    res.send({ value: 'deleted' })
}

module.exports = bandsServices = {
    Store,
    Delete
}