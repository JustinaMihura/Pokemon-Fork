import axios from "axios";
import React, { useState  } from "react";
import style from "./PokeCreate.module.css"

const PokeCreate = ({navigate}) => {




    const pokeCreate = async (form) => {
        
        const URL  = "http://localhost:3001/pokemons/create";

        try {

            const {data} = await axios.post(URL, form);

            if(data) {
                console.log("creado con exito");
                navigate("/home")
            };

        } catch (error) {
            return console.log(error.message);
        }

    };

    const [form, setForm] = useState({
        name : "",
        image: "",
        attackDamage : 0,
        magicDamage : 0,
        defense : 0,
        speed : 0,
        weight : 0,
        life : 0,
        database : true
    });
   

    const handleChange = (event) => {
        setForm({...form , [event.target.name] : event.target.value})
        }; 


    const handleSubmit =  async (event) => {
        event.preventDefault();
         await pokeCreate(form)
        };
 


    return (
        <form onSubmit={handleSubmit}>
            <div className={style.create}>
                <h2>CREA TU PROPIO PÓKEMON!!</h2>

                <fieldset className={style.fieldset}>
                    <legend>Dale nombre e imagen a tu pókemon!</legend>
                    <br></br>
                    <label htmlFor="name">¿Como quieres que se llame?</label>
                    <br></br>
                    <input  onChange={handleChange} name="name" placeholder="Escribelo aqui.." required></input>

                    <br></br>

                    <label htmlFor="image">Inserta una imagen aqui!</label>
                    <br></br>
                <br></br>

                    <input type="file" name="image" required onChange={handleChange} ></input>
                    <br></br>
                </fieldset>
                <br></br>
                <fieldset >

                     <legend>Es tiempo que le des sus estadisticas básicas!</legend>
                     <br></br>
                     <label htmlFor="life">Vida : </label>
                     <br></br>
                     <input name="life" type="number" placeholder="vida basica" onChange={handleChange} ></input>
                     <br></br>
                     <label htmlFor="defense"> Defensa :</label>
                     <br></br>
                     <input type="number"  name="defense" placeholder="Defensa basica" onChange={handleChange} ></input>
                     <br></br>
                     <label htmlFor="attackDamage">Poder de Ataque : </label>
                     <br></br>
                     <input type="number"  name="attackDamage" placeholder="Poder de atque basico" onChange={handleChange} ></input>
                     <br></br>
                     <label htmlFor="magicDamage"> Poder Mágico : </label>
                     <br></br>
                     <input type="number" placeholder="Poder Magico básico" name="magicDamage" onChange={handleChange} ></input>
                     <br></br>

                     <label htmlFor="speed"> Velocidad : </label>
                     <br></br>
                     <input type="number" name="speed" placeholder="Velocidad básica" onChange={handleChange} ></input>
                     <br></br>

                     <label htmlFor="weight"> Peso :</label>
                     <br></br>
                     <input type="number" name="weight" placeholder="Peso total básico" onChange={handleChange}></input>
                     <br></br>


                </fieldset>
                <br></br>
                    <button type="submit">Envíanoslo!</button>
            </div>
        </form>
    )
};

export default PokeCreate;
