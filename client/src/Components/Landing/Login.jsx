import React, { useState } from "react";
import style from "./Login.module.css"

export default function Login({getLogin, setForm}) {
    
    
    
    const [login ,setLogin] = useState({
        email : "",
        password : "",
        
    });
    

   const handleChange = (event) => {
        setLogin({...login, [event.target.name] : event.target.value})
   };

   const handleLogin = async (event) => {
    event.preventDefault();
     await getLogin(login);
   };

   const handleForm = () => {
    setForm("register")
   }; 

    return (
    
            <form onSubmit={handleLogin} className={style.form}>
                <div >
                    <fieldset>
                        <legend>Loguéate y accede a tu Pokedex!</legend>
                        <br></br>
                <label>Email : </label>
                <br></br>
                <input type="email" value={login.email} onChange={handleChange} name="email" placeholder="Escribe tu email aqui..."></input>
                <br></br>
                <label>Password : </label>
                <br></br>
                <input type="password" value={login.password} onChange={handleChange} name="password" placeholder="Escribe tu contraseña aqui..."></input>
                <br></br>

                <label>Let´go!!</label>
                <br></br>
                <button type="submit">Enter</button>
                <br></br>
                <label>Dont have an account? </label>
                <br></br>
                <button onClick={handleForm}>Register here</button>
                <br></br>
                </fieldset>
                </div>
            </form>
    );
};