import React, { useState,useEffect } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx"
import style from "./Landing.module.css"
import axios from "axios"

export default function Landing({setIsLoading ,setAccess , access , navigate}) {

    const [form , setForm] = useState("login");


  const getLogin = async (login) => {

    try {
        setIsLoading(true)
        const {email , password, username, password2 } = login;

        if(form === "login") {

        const {data} = await axios.get(`http://localhost:3001/?email=${email}&password=${password}`)
        if(data) {
            setIsLoading(false)
            setAccess(true);
            navigate("/home");
            return
            };
        }
        else if(form === "register") {

            if(password === password2){
                setIsLoading(true)
        const {data} = await axios.post("http://localhost:3001/", {email : email , password : password, username : username, password2 : password2});
        
        if(data) {
            setIsLoading(false)
            setAccess(true);
            navigate("/home")
            return
            }

        };
    };
        } catch (error) {
            setIsLoading(false)
        return console.log(error);
    }
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access ]);

    

    return (
        <div className={style.landing}>
            <h1><b>POKECENTER </b> </h1>
            <h2> Bienvenidos al a app de Pokemon</h2>
            <h5> Aqui encontrarás todos los pokemons de las generacion I hasta la generacion VI</h5>
            <h3> Son 1281 pokemons!</h3>

        
            { form === "login" 
            ? <Login getLogin = {getLogin} setForm =  {setForm } /> 
            : <Register getLogin = {getLogin} setForm = {setForm}/> 
            } 
           
           
        </div>
    )
}