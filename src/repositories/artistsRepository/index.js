const dbConnection = require('../../database/connection');

async function Store(name) {
  const response = await dbConnection('artists').insert({
    name
  })
  return response;
}

async function Show() {
  return await dbConnection('artists').select('*');
}

async function GetById(id) {
  return await dbConnection('artists').select('*').where({ id: id });
}

async function Delete(id) {
  const response = await dbConnection('artists').where({ id: id }).del();
  console.log(response, '====Teste delete')
  return response;
}

module.exports = artistsRepository = {
  Store,
  Show,
  GetById,
  Delete
}