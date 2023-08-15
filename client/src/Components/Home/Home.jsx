import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards.jsx";
import { useDispatch} from "react-redux";
import { getPokes } from "../Redux/actions.js";
import Filters from "../Filters/Filters.jsx"
import { GET_FILTER } from "../Redux/actions-types.js";
import style from "./Home.module.css"
export default function Home ()  {


//* -------------- Estados locales para paginado -----------------------------------------

    const  [url ,setUrl ] = useState(0)

    const [currentPage , getCurrentPage] = useState(1); 

    // eslint-disable-next-line
    const dispatch = useDispatch();
    

//* --------------------------------------------------------------------------------------

//?---------------- Controladores para mostrar determinados pokes ------------------------

    const nextHandler = () => {
        
        const nextPage = currentPage + 1;

        if(currentPage === 107 ) return;

        getCurrentPage(nextPage);
        setUrl(url + 12)
        
       
    };
    
    const prevHandler = () => {

        const prevPage = currentPage - 1;
        
        if(prevPage < 1) return;
        
        getCurrentPage(prevPage);
        setUrl(url - 12)

       
    };

//?-----------------------------------------------------------------------------------------



//!-------------- Llamada a la API al renderizar el Dom--------------------------------------------


    useEffect( ()=> {
        
        dispatch(getPokes(url));

        const wait = () => {
            dispatch({type : GET_FILTER , payload : ""})
        };
        setTimeout(wait , 1100)   

     }, [currentPage , dispatch]);

   


    
//!---------------------------------------------------------------------------------------------------------------

    return (

        <div className={style.home}>

           
            <div >
                <Filters></Filters>
            </div>  

            <div className={style.card1}><h4 className={style.h4}>Pagina : {currentPage}</h4>
            <button onClick={prevHandler}> Prev </button>
            <button onClick={nextHandler}> Next </button></div>    
             
            <div className={style.cards}><Cards></Cards></div>
                 
            
            <div className={style.card2}><h4 className={style.h4}>Pagina : {currentPage}</h4>
            <button onClick={prevHandler}> Prev </button>
            <button onClick={nextHandler}> Next </button></div>
           

           
        </div>
    )
};