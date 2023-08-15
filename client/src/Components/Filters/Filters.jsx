import React , {useEffect, useState }from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { GET_FILTER ,GET_ASC, GET_DESC , GET_POKE_CREATE} from "../Redux/actions-types";
import style from "./Filters.module.css"
import { Link } from "react-router-dom";

const Filters = () => {

//!--------------------- Estados locales -----------------------------------------------

const [tipos , setTipos] = useState([]);
const dispatch = useDispatch();
const [defaultOptions , setDefaultOptions] = useState();


//!---------------------------------------------------------------------------------------------
//------------------------ Filtros por tipo y por ASC/DESC o por DB------------------------------------------------------
const getFilterer = (event) => {

    
    const selectValue = event.target.value;
    console.log(selectValue);

    if(selectValue === "borrar" || selectValue === "" ) {
        setDefaultOptions("");
        return dispatch({type : GET_FILTER , payload : selectValue});
    };

       return  dispatch({type : GET_FILTER , payload : selectValue})
    
    
};

const filterAsc = (string) => {
    if(string === "borrar") {
        return {type : GET_ASC, payload : "borrar"}
    }
    return dispatch({type : GET_ASC })
};

const filterDesc = (string) => {

    if(string === "borrar") {
        return {type : GET_DESC, payload : "borrar"}
    }

    return dispatch({type : GET_DESC})
};


const findApi = async () => {
    
    try {
        const {data} = await axios("http://localhost:3001/find");
        if(data)
        return dispatch({type : GET_POKE_CREATE , payload : data})
         
        
        return console.log("error : no se encontraron pokes creados");      
    
    } catch (error) {
        return console.log(error.message);
    }

}

//---------------------------------------------------------------------------------------------------------
//*------------------LLamado a la DB por los tipos al renderizar el DOM--------------------------------------------------

const getSpecificType = async () => {

    try {
        const {data} = await axios.get("http://localhost:3001/types");
        if(data) {
            setTipos(data)
            return
        };

    } catch (error) {
        return console.log(error.message);
    }

};

useEffect( () => {
    getSpecificType()
 
}, [])





//*--------------------------------------------------------------------------------------------------




    return (
        <div className={style.filter}>

            <fieldset className = {style.fieldset}>
                
                <legend><b>Filtros para ti </b></legend>

            <h4>Neceseitas buscar por tipo específico?</h4>
            

            <label htmlFor="tipos">Tipos :</label>

            <select name="tipos"  value={defaultOptions} onChange={(event) => getFilterer(event)}> 

            <option value="">--Seleccione un tipo--</option>
            {tipos 
            ? tipos.map((ele, index) =>{
                return <option  value={ele.name} key={index} >{ele.name}</option> 
                })
            : null
            }; 

            </select>
            
            <h4> O necesitas ver los Pókemons creados o de la API?</h4>
            
            <button value="borrar" onClick={(event) => { getFilterer(event);filterAsc("borrar"); filterDesc("borrar")}}>Mostrar todos</button>
            <button type="button" onClick={() => findApi()}>Filtrar por API</button>

            <h4> O necesitas ordenarlo de mayor a menor viceversa?</h4>
            
            <button onClick={() => filterAsc()}>Ascendente</button>
            <button onClick={() => filterDesc()}>Descendente</button>

            <br></br>

            <h4> ¿Quieres crearr un pokemon ?</h4>
            <Link   to={"/pokeCreate"}>
                <button  type="button"> Crear Pókemon </button>
            </Link > 
            </fieldset>
        </div>
    )
};
export default Filters;