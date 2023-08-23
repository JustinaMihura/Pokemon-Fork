import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import style from "./Detail.module.css"

export default function Detail ({setIsLoading}) {

    const { idPokemon } = useParams();
  
    const dispatch = useDispatch();
    const details = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(getDetail(idPokemon , setIsLoading))
    }, [idPokemon])

    

    return (
    <div className={style.detail}>
        <img className = {style.img} src={details.image} alt={details.name}></img>
   
    <div className={style.stat}>
        <br></br>
        <h1 > {details.name}</h1>
        <h2> life : {details.life}</h2>
        <h2> attackDamage : {details.attackDamage}</h2>
        <h2>magicDamage : {details.magicDamage}</h2>
        <h2>defense : {details.defense}</h2>
        <h2>speed : {details.speed}</h2>
        <h2>weight : {details.weight}</h2>
        <h2>type 1 : {details.type}</h2>
        {details.type2 && <h2>type 2 : {details.type2}</h2>}
    </div>
    </div>
    )
};