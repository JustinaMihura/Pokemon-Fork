const axios = require("axios");
const { Types } = require ("../db");
const {conn} = require("../db");



async function getTypes(req, res) {

    try {
        
        const [ result , metadata ] = await conn.query(
            'SELECT * FROM "Types"',
            );
        /* console.log(result); */
        
        if(result.length === 0) {

            const {data} = await axios("https://pokeapi.co/api/v2/type");

            const push = await Types.bulkCreate(data.results);

            return res.status(200).json({
                message : "Todos los tipos agregados",
                 result :  push
                })

        };
         
        return res.status(200).json(result);
        
    } catch (error) {

        return res.status(500).json(error.message)
    }

};

module.exports = {
    getTypes
};