const axios = require('axios');
const dbConnection = require('../../database/connection');

async function Store(
    name,
    genre,
    active,
    lifetime,
    photo) {
    const response = await dbConnection('bands').insert({
        name,
        genre,
        active,
        lifetime,
        photo
    });


    return response;
}

async function Show() {
    const response = await dbConnection('bands').select('*');

    return response;
}

function Delete(req, res) {

    res.send({ value: 'deleted' });
}

module.exports = bandsRepository = {
    Store,
    Delete,
    Show
}