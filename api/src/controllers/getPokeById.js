const axios = require("axios")

async function getPokeById (req, res) {
  
    const { idPokemon } = req.params;
  console.log(idPokemon);
    try {
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        if(data) {
            

          return  res.status(200).json({
            name : data.name,
            image : data.sprites.other["official-artwork"]["front_default"],
            life : data.stats[0]["base_stat"],
            attackDamage : data.stats[1]["base_stat"],
            magicDamage : data.stats[3]["base_stat"],
            defense : data.stats[2]["base_stat"],
            speed : data.stats[5]["base_stat"],
            weight : data.weight,
            type : data.types[0].type.name,              
            type2 : data.types[1]?.type.name,           
                
 
            });
        };
        
          return   res.status(400).json("not found")
          
    } catch (error) {

      return   res.status(500).json(error.message)
    }
}

module.exports = {
    getPokeById
}