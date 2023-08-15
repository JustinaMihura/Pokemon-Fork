import React from "react";
import SearchBar from "./SearchBar.jsx";
import style from "./Nav.module.css"; 
import logo from "./logo1.png"
import { Link } from "react-router-dom";
import Home from "../Home/Home.jsx";


export default function Nav({navigate , setAccess}) {

    

    const logOut = () => {
        setAccess(false)
        navigate("/")
    }

    return (
        <nav className={style.nav}>
        <div className={style.divLogo}>
            <Link to="/home" element = {<Home/>}><img className={style.logo} src={logo}></img></Link>
        </div>
        <div >
            <SearchBar logOut = {logOut}></SearchBar> 
            
        </div>
                
           
            
        </nav>
    
    )
};