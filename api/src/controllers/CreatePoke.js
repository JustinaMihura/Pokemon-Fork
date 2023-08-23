const { Pokemon, Types } = require("../db");

async function createPoke(req, res) {
  const {
    name,
    attackDamage,
    speed,
    magicDamage,
    defense,
    life,
    weight,
    image,
    type,
    type2

  } = req.body;

  if (
    !name ||
    !attackDamage ||
    !speed ||
    !magicDamage ||
    !defense ||
    !life ||
    !weight ||
    !image ||
    !type 
    
  ) {
    return res.status(404).json("Faltan datos obligatorios");
  }

  try {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        name: name,
      },
      defaults: {
        attackDamage: attackDamage,
        speed: speed,
        magicDamage: magicDamage,
        defense: defense,
        life: life,
        weight: weight,
        image: image,
        database: true,
      }

    });

    if (created) {
        await Promise.all([pokemon.setTypes(type), pokemon.setTypes(type2)]) 
      return res.status(200).json(pokemon);
    }

    return res
      .status(409)
      .json({ error: "Ya existe este pokemon", pokemon: pokemon });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPoke,
};
