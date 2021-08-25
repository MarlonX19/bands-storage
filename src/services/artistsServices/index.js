const { artistsRepository } = require('../../repositories')

async function Store(name) {
  const response = await artistsRepository.Store(name);
  return response;
}

async function Show() {
  return await artistsRepository.Show();
}

module.exports = artistsServices = {
  Store,
  Show
}