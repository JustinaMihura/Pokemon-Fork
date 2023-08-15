import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { GET_POKE_NAME } from "../Redux/actions-types";
import style from "./SearchBar.module.css"



export default function SearchBar ({logOut}) {

    const [searchOutput , getSearchOutput ] = useState("");

    const dispatch = useDispatch();


    const handleChange = (event) => {
        getSearchOutput(event.target.value);
    };
    
    
const handleSearchName = (searchOutput) => {
    return async (dispatch) => {

            if(searchOutput === ""){
                getSearchOutput("")
                return dispatch({type : GET_POKE_NAME});
            };

        try {
            const {data} = await axios(`http://localhost:3001/pokemons/name?name=${searchOutput.toLowerCase()}`);

            if(data) {
                return dispatch({type : GET_POKE_NAME , payload : data})
            };
            
           
        } catch (error) {
            return console.log(error.message);

        }

    }
};




    return (
        
    <div className = {style.searchBar}>
        
        <button  type="button" onClick={() => logOut()}> Cerrar sesión </button>
        <button type="button" onClick={() => dispatch(handleSearchName(""))}>Volver atras</button>
        <input className={style.input}type="text" name="search" placeholder="Busca por nombre completo..."
        value={searchOutput} onChange={handleChange}></input>
        <button className={style.button} type="button" onClick={() => dispatch(handleSearchName(searchOutput))} >Buscar </button>

    </div>
    )
}