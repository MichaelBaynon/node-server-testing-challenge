const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
  add,
  find
};

async function insert(weapon) {
  const [id] = await db('weapons').insert(weapon, 'id');

  return db('weapons')
    .where({ id })
    .first();
}

function find() {
    return db("weapons").select("id", "weapon");
  }

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('weapons')
  .where('id',(id))
  .del()
}

function getAll() {
  return db('weapons');
}

function add(weapon) {
    console.log(weapon)
  return db("weapons")
    .insert(weapon, 'id')
    .then(id => {
        console.log(id)
      findById(id);
    });
}

function findById(id) {
  return null;
}