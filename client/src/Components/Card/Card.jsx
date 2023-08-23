import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css"


export default function Card ({image, name, idApi, Types}) {
console.log(Types)

    

    return (
            
        <Link to={`/detail/${idApi}`}>
        <div className = {style.card}>
            

            {image 
            ? <img  className = {style.img} src={image}  alt={name}></img> 
            : null }

            {name 
            ? <h4>{name}</h4>
            : null }

            {Types[0] ? <h2>{Types[0].name}</h2> : null}
            {Types[1] ? <h2>{Types[1].name}</h2> : null}

                 

        </div>
        </Link>
    )
};