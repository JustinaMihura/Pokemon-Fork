
const {Users} = require("../db");


const getLogin = async (req,res) => {

    try {
        const {email ,password} = req.query;

        const response =  await Users.findOne({where : {email : email, password : password}})
        if(!response) {
            res.status(404).json({error : "No se encontró el usuario. Te invito a que te crees uno :D"})
        };
        
        return res.status(200).json({data : "Bienvenido"})
    } catch (error) {
        return res.status(500).json({error : error.message})
    };
    
};

module.exports = {
    getLogin
};