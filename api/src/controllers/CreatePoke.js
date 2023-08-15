const {Pokemon} = require("../db")


async function createPoke(req, res) {
    const {name , attackDamage , speed , magicDamage , defense, life , weight , image} = req.body;

     if(!name || !attackDamage || !speed || !magicDamage || !defense || !life || !weight || !image) {
         return res.status(404).json("Faltan datos obligatorios");
     };

   try {
        
        const [pokemon, created] = await Pokemon.findOrCreate({where : {
                                                            name : name,
                                                            attackDamage : attackDamage,
                                                            speed : speed,
                                                            magicDamage : magicDamage,
                                                            defense : defense,
                                                            life : life,
                                                            weight : weight,
                                                            image : image,
                                                            database : true
                                                        } });
        
        if(created) {
            return res.status(200).json(pokemon);
        };
        
        return res.status(400).json("Ya existe este pokemon")
    
   } catch (error) {
    
    return res.status(500).json({error : error.message})
   } 
};

module.exports = {
    createPoke
}