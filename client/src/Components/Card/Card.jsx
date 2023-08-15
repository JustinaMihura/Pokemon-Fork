import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"


export default function Card ({image, name, type , type2, id}) {

    return (
            
        <Link to={`/detail/${id}`}>
        <div className = {style.card}>
            

            {image 
            ? <img  className = {style.img} src={image}  alt={name}></img> 
            : null }

            {name 
            ? <h4>{name}</h4>
            : null }

        <ul>Tipos :
            {type 
            ? <li>{type}</li> : null }

            {type2
            ? <li>{type2}</li>
            : null }   
        </ul>

        </div>
        </Link>
    )
};