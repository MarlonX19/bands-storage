const axios = require('axios');

async function Store() {    
    const { data } = await axios.get('https://60e3d5ca6c365a00178393e7.mockapi.io/api/v1/bands/bands')
    
    return data;
}

function Delete(req, res) {

    res.send({ value: 'deleted' })
}

module.exports = bandsRepository = {
    Store,
    Delete
}