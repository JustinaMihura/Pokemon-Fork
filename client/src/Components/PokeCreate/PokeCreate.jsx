import axios from "axios";
import React, { useEffect, useState  } from "react";
import style from "./PokeCreate.module.css"
import Card from "../Card/Card";
import validation from "./Validations"
import { useSelector } from "react-redux";

const PokeCreate = ({navigate}) => {

const [errors, setErrors] = useState({})
const types = useSelector(state => state.types)



    const pokeCreate = async (form) => {
        
        const URL  = "http://localhost:3001/pokemons/create";

        try {
            console.log(form);
            const {data} = await axios.post(URL, form);

            if(data) {
                console.log("creado con exito");
                navigate("/home")
            };

        } catch (error) {
            return setErrors(error.response.data);    

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
        type : 0,
        type2 : 0,
        database : true
    });
    
    
    const handleChange = (event) => {
        console.log(form)
        const {value , name} = event.target
        // const newPokemon = {...form , [name] : value}
        setForm((prevForm) => ({
            ...prevForm, [name]:value
        }))
        
       const errorDetect = validation({...form, [name] : value})
       setErrors((prevError) => ({
        ...prevError, [name] : errorDetect[name]
       }))
    };

    const handleTypes = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }


    const handleSubmit =  async (event) => {
        event.preventDefault();
         await pokeCreate(form)
        };
 



    return (
        <div className = {style.divMaster}>
        <form onSubmit={handleSubmit} className = {style.form} >
        <div className={style.create}>
                <h2>CREA TU PROPIO PÓKEMON!!</h2>

               
                   <h2>Dale nombre e imagen a tu pókemon!</h2>
                    <label htmlFor="name"><h2>¿Como quieres que se llame?</h2></label>
                    
                    <input className={style.input} onChange={handleChange} name="name" placeholder="Escribelo aqui.." ></input>
                    {errors.name ? <p style={{color : "red"}}>{errors.name}</p> : null}
                    

                    <label htmlFor="image"><h3>Inserta una imagen aqui!</h3></label>
                    
                    {/* <input className={style.input} type="file"  onChange={handleChange} ></input> */}
                    <input className={style.input} type="url" placeholder="Envie una Url" name="image" onChange={handleChange}></input>
                    {errors.image ? <p style={{color : "red"}}>{errors.image}</p> : null}
                
                     <h2>Es tiempo que le des sus estadisticas básicas!</h2>
                     
                     <label htmlFor="life"> <h3>Vida :</h3> </label>
                     <input className={style.input} name="life"  placeholder="vida basica" onChange={handleChange} ></input>
                    {errors.life ? <p style={{color : "red"}}>{errors.life}</p> : null}     

                     <label htmlFor="defense">  <h3>Defensa :</h3></label>
                     <input className={style.input}   name="defense" placeholder="Defensa basica" onChange={handleChange} ></input>
                     {errors.defense ? <p style={{color : "red"}}>{errors.defense}</p> : null}
                     
                     <label htmlFor="attackDamage"> <h3>Poder de Ataque : </h3></label>
                     <input className={style.input}   name="attackDamage" placeholder="Poder de atque basico" onChange={handleChange} ></input>
                     {errors.attackDamage ? <p style={{color : "red"}}>{errors.attackDamage}</p> : null}

                     <label htmlFor="magicDamage"> <h3>Poder Mágico :</h3>  </label>
                     <input className={style.input}  placeholder="Poder Magico básico" name="magicDamage" onChange={handleChange} ></input>
                      {errors.magicDamage ? <p style={{color : "red"}}>{errors.magicDamage}</p> : null}

                     <label htmlFor="speed"> <h3>Velocidad :</h3> </label>
                     <input className={style.input} name="speed" placeholder="Velocidad básica" onChange={handleChange} ></input>
                     {errors.speed ? <p style={{color : "red"}}>{errors.speed}</p> : null}

                     <label htmlFor="weight"> <h3> Peso :</h3></label>
                     <input className={style.input}  name="weight" placeholder="Peso total básico" onChange={handleChange}></input>
                     {errors.weight ? <p style={{color : "red"}}>{errors.weight}</p> : null}

                   
                    {errors.type ? <p style={{color : "red"}}>{errors.type}</p> : null}
                    <label htmlFor="type"><h3> Primer tipo :</h3></label>
                   
                    <select name="type" onChange={handleTypes}>

                    <option value="">--Selecionar tipo--</option>
                    {types ? types.map((ele, index) => {
                      return  <option name="type" value={ele.id} key={index}>{ele.name}</option>
                    }) : null}
                    </select>


                    <label htmlFor="type2"><h3> Segundo tipo :</h3></label>
                    <select name="type2" onChange={handleTypes}>
                        
                    <option value="">--Selecionar tipo--</option>
                    {types ? types.map((ele, index) => {
                      return  <option  name="type2" value={ele.id} key={index}>{ele.name}</option>
                    }) : null}
                    </select>
                </div>
                  
                    <button type="submit">Envíanoslo!</button>
        </form>
                

            <div className={style.divError}>
                {errors.error ? <h2 style={{color : "red"}}>{errors.error}</h2> : null}
                {errors.data ? <h2 style={{color : "red"}}>{errors.data}</h2> : null}
                {errors.pokemon ? <Card name = {errors.pokemon.name} image = {errors.pokemon.image} Types= {["electric"]}  /> : null}
            </div>

            </div>
        

    )
};

export default PokeCreate;
