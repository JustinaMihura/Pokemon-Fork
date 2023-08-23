import { useEffect , useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./Cards.module.css"


export default function Cards () {

    const pokemons = useSelector(state => state.pokemons);
    const searchName = useSelector(state => state.searchName);
    const filters = useSelector(state => state.filters);
  
  console.log(pokemons);
   


    const busqueda = searchName;
    

        var filtrado;
        if(filters.length>0) {
            filtrado = filters
        } else {
            filtrado = pokemons
        }

    useEffect(() => {
      renderCards()
    },[filters , filtrado])

  


const renderCards = () => {
    if (busqueda.length >= 1) {
      return  (busqueda.map((ele, index) => {
        console.log(ele)
        const tipos = [{name: ele.type}, {name: ele.type2}]
       return  <Card
          name={ele.name}
          key={index}
          image={ele.image}
          Types= {tipos}
          
        />
    }));

    } else if(typeof filters === "string") {
            return<div className={style.div}>
               <h1 className={style.h1}>"No se encontraron pokes  con ese tipo :C"</h1>
                    <h1 className={style.h1}>"Pulsa el boton "Mostrar todos si quieres ver los pokemons de nuevo"</h1>
            </div> 
           
        }

      return filtrado.map((ele, index) => {
        return (
          <Card
            key={index}
            image={ele.image}
            name={ele.name}
            idApi={ele.idApi}
            Types = {ele.Types}
          />
        );
      });

   
  };


  
  return (
    <div className={style.cards}>
      {renderCards()}
    </div>
  );


    
   

};