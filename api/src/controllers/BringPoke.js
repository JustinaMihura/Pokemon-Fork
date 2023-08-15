const {conn} = require("../db")

const BringPoke = async (req,res) => {
    try {
        const [result ,metadata] = await conn.query(`SELECT * FROM "Pokemons" WHERE database = true`);
        
            console.log(result);
            return res.status(200).json(result)
        
    } catch (error) {
        return res.status(500).json({error : error.message})
    }


};
module.exports = {
    BringPoke
}