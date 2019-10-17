const express = require('express')

const Weapons = require('../fortniteWeapons/weaponsModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/weapons', (req, res) => {
  Weapons.find()
    .then(weapons => {
      res.status(200).json(weapons)
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/weapons', (req, res) => {
    let weapon = req.body
    Weapons.add(weapon)
    .then(saved => {
        res.status(201).json({ message: 'weapon registery success', saved})
    })
    .catch(error => {
        res.status(500).json({ message: "cannot add this weapon", error });
    })
})

server.delete('/weapons/:id', (req, res) => {
  const id = req.params.id

  Weapons.remove(id).then(weapon => {
    res.json({ message: 'weapon deleted' , weapon})
  })
  .catch(error => {
    res.status(500).json({ message: "The weapon could not be removed" });
  });
})

module.exports = server;