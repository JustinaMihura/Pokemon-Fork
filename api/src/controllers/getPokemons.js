const axios = require("axios");
const {Pokemon} = require("../db");

 async function getPokemons (req ,res) {

    const { offset, limit } = req.query
    /* console.log(req.query); */

    try {
          const {data} = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
          
          const dato = data.results.map( async element => await axios(element.url));

          const  resultado = await Promise.all(dato);

          const resultado1 = resultado.map(ele => {

            return {

                name : ele.data.name,
                image : ele.data.sprites.other["official-artwork"]["front_default"],
                life : ele.data.stats[0]["base_stat"],
                attackDamage : ele.data.stats[1]["base_stat"],
                magicDamage : ele.data.stats[3]["base_stat"],
                defense : ele.data.stats[2]["base_stat"],
                speed : ele.data.stats[5]["base_stat"],
                weight : ele.data.weight,
                type : ele.data.types[0].type.name,              
                type2 : ele.data.types[1]?.type.name,
                id : ele.data.id
            };
          });
          

            await Promise.all(resultado1.map(async ele => 

            await Pokemon.findOrCreate({where :{name : ele.name, 
              image : ele.image, 
              life : ele.life,
              attackDamage : ele.attackDamage ,
              magicDamage : ele.magicDamage,
              defense : ele.defense, 
              speed : ele.speed, 
              weight : ele.weight
            }})
            ));
            
            if(resultado1) {
            return res.status(200).json(resultado1);
          };



          return res.status(400).json({error : "No se encontraron los pokemons :("})

    } catch (error) {
        res.status(500).json({error : error.message})
    };
};

module.exports = {
    getPokemons
};