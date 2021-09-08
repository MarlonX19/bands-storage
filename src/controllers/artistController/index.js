const { artistsServices } = require('../../services')

async function Store(req, res, next) {
  const { name: novoNome } = req.body
  try {
    const response = await artistsServices.Store(novoNome)
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    next(error);
  }
}

async function Get(req, res, next) {
  try {
    const response = await artistsServices.Show();
    console.log(response.data)
    res.send(response.data);
  } catch (error) {
    next(error);
  }
}

module.exports = artistController = {
  Store,
  Get
}