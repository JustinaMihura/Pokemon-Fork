const {Users} = require("../db");

const getRegister = async (req,res) => {

    try {
        const {email, username , password ,password2} = req.body;
        console.log(req.body);

        if(password !== password2) {
            return  res.status(400).json({error : "Las contraseñas no coinciden"})
        };
         
        
            const [user , created] = await Users.findOrCreate({where : {email : email, password : password, username : username }});

        if (created) {
            return res.status(200).json("Se creo con exito" )
        };

        return res.status(400).json("Ya existe ese usuario")
    } catch (error) {
        return res.status(500).json({error : error.message })
    }
};

module.exports = {
    getRegister
};