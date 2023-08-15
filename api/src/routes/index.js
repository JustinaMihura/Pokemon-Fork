const { Router } = require('express');
const { getPokemons } = require('../controllers/getPokemons');
const { getPokeById } = require("../controllers/getPokeById");
const { getPokesByName } = require("../controllers/getPokesByName");
const { createPoke } = require('../controllers/CreatePoke');
const { getTypes } = require('../controllers/getTypes');
const { getLogin } = require('../controllers/getLogin');
const { getRegister } = require('../controllers/getRegister');
const { BringPoke } = require('../controllers/BringPoke');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get(`/pokemons/name`, getPokesByName)
router.get(`/pokemons/:idPokemon` , getPokeById);
router.post(`/pokemons/create`, createPoke)
router.get(`/types`, getTypes)
router.get(`/`, getLogin);
router.post(`/` , getRegister)
router.get(`/find` , BringPoke)

module.exports = router;
