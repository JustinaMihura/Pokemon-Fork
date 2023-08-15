import React, { useState } from "react";
import style from "./Register.module.css"

export default function Register({setForm, getLogin}) {

    
    const [login ,setLogin] = useState({
        username : "",
        email : "",
        password : "",
        password2 : ""
    });
    

    

   const handleChange = (event) => {
        setLogin({...login, [event.target.name] : event.target.value})
        
   };

   const handleForm = () => {
    setForm("login")
   };

   const handleLogin = async (event) => {
    event.preventDefault();
    await getLogin(login)  
   };

   return (
    
        <form  className= {style.register}onSubmit={handleLogin}>
            <div>
                <fieldset>
                        <legend>Registrate y accede a tu Pokedex!</legend>
                        <br></br>
            <label>Usuario :</label>
            <br></br>
            <input type="text" placeholder="escribe tu nombre" onChange={handleChange} name="username" value={login.username}></input>
            <br></br>
            <label>Email : </label>
            <br></br>
            <input type="email" value={login.email} onChange={handleChange} name="email" placeholder="Escribe tu email aqui..."></input>
            <br></br>

            <label>Password : </label>
            <br></br>
            <input type="password" value={login.password} onChange={handleChange} name="password" placeholder="Escribe tu contraseña aqui..."></input>
            <br></br>

            <label>Confirm Password : </label>
            <br></br>
            <input type="password" value={login.password2} onChange={handleChange} name="password2" placeholder="Reescribe tu contraseña aqui..."></input>
            <br></br>

            <label>Let´go!! </label> 
            <br></br>
            <button type="submit">Enter</button>
            <br></br>

            <label>Already have an account? </label>
            <br></br>
            <button onClick={handleForm}>LogIn</button>
            <br></br>
                </fieldset>
            </div>
        </form>
    
);
};