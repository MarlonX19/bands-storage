const bandsErrorMessages = require('../../utils/bandsErrorMessages');

const errorCatcher = (error, req, res, next) => {

    if(error.message == bandsErrorMessages.NO_BANDS_FOUND) {
        return res.status(404).send({ message: error.message })
    }
    if(error.code == bandsErrorMessages.NO_BANDS_FOUND) {
        return res.status(404).send({ message: 'Nenhuma banda encontrada' })
    }

    return res.status(500).send({ error: error });
}

module.exports = errorCatcher;
