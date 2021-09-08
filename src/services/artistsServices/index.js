const { artistsRepository } = require('../../repositories')

async function Store(name) {
  return await artistsRepository.Store(name);
}

async function Show() {
  return await artistsRepository.Show();
}

async function GetById(id) {
  return await artistsRepository.GetById(id);
}

async function Delete(id) {
  return await artistsRepository.Delete(id);
}

module.exports = artistsServices = {
  Store,
  Show,
  GetById,
  Delete
}