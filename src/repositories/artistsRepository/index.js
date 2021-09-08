const dbConnection = require('../../database/connection');

async function Store(name) {
  console.log(name, '===testenome');
  const response = await dbConnection('artists').insert({
    name
  })
  return response;
}

async function Show() {
  const response = await dbConnection('artists').select('*');
  console.log(response.data, '====teste');
}

module.exports = artistsRepository = {
  Store,
  Show
}