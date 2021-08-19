const { bandsRepository } = require('../../repositories')

async function Store(
    name,
    genre,
    active,
    lifetime,
    photo) {
    const response = await bandsRepository.Store(
        name,
        genre,
        active,
        lifetime,
        photo
    );

    return response;
}

async function Show() {
    const response = await bandsRepository.Show();

    return response;
}

function Delete() {
    res.send({ value: 'deleted' })
}

module.exports = bandsServices = {
    Store,
    Delete,
    Show
}