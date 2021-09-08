const { artistsServices } = require('../../services')

async function Store(req, res, next) {
  const { name: novoNome } = req.body
  try {
    res.send(await artistsServices.Store(novoNome));
  } catch (error) {
    next(error);
  }
}

async function Get(req, res, next) {
  try {
    res.send(await artistsServices.Show());
  } catch (error) {
    next(error);
  }
}

async function GetById(req, res, next) {
  const { id: idPesquisado } = req.params
  try {
    res.send(await artistsServices.GetById(idPesquisado));
  } catch (error) {
    next(error);
  }
}

async function Delete(req, res, next) {
  const { id: idDelete } = req.params
  try {
    const response = await artistsServices.Delete(idDelete);
    console.log(response);
    res.send({ response });
  } catch (error) {
    next(error);
  }
}

module.exports = artistController = {
  Store,
  Get,
  GetById,
  Delete
}