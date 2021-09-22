const { bandsServices } = require('../../services')

async function Store(req, res, next) {
    const { filename } = req.file;
    const {
        name,
        genre,
        active,
        lifetime,
    } = req.body;

    try {
        const response = await bandsServices.Store(
            name,
            genre,
            active,
            lifetime,
            filename
        )

        res.json({ value: response })
    }
    catch (error) {
        console.log('===error', error);
        next(error);
    }

}

async function Show(req, res, next) {

    try {
        const response = await bandsServices.Show()

        res.json({ value: response })
    }
    catch (error) {
        console.log('===error', error.code)
        next(error);
    }
}


function Delete(req, res, next) {

    res.send({ value: 'deleted' })
}

module.exports = bandsController = {
    Store,
    Delete,
    Show
}