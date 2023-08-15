const axios = require("axios");

async function getPokesByName (req , res) {
    
    try {
        
        const { name } = req.query;
        console.log(name);
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
        
        if(data.name) {

            return res.status(200).json({
                id : data.id,
                name : data.name,
                image : data.sprites.other["official-artwork"]["front_default"],
                type : data.types[0].type.name,              
                type2 : data.types[1]?.type.name}
                );
        };

        return res.status(404).json({error : "Pokemon no encontrado"});

    } catch (error) {

        return error;
    }
};

module.exports = {
    getPokesByName
}
