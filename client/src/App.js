import './App.css';
import React, { useState} from 'react';
import {Routes, Route, useLocation  , useNavigate} from "react-router-dom";
import Landing from './Components/Landing/Landing.jsx';
import Home from "./Components/Home/Home.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Detail from "./Components/Detail/Detail.jsx"
import PokeCreate from './Components/PokeCreate/PokeCreate.jsx';
import Loading from './Components/Loading/Loading';




function App() {

  
  const [access , setAccess] = useState(false);
  const navigate = useNavigate("");
  const location = useLocation()
  const [isLoading , setIsLoading] = useState(false)

if(isLoading) {
  return <Loading></Loading>
}



  return (
    
    <div className="App">
    
      { location.pathname !== "/" && <Nav setAccess ={setAccess}  navigate = {navigate}/> }
      
      <Routes>
      
        <Route path = "/" element = {<Landing setIsLoading = {setIsLoading} navigate = {navigate}  setAccess = {setAccess} access = {access}/>}  />
        <Route path='/home' element = {<Home />}  />
        <Route path='/detail/:idPokemon' element = {<Detail setIsLoading = {setIsLoading}/>} />;
        <Route path='/pokeCreate' element = {<PokeCreate navigate = {navigate}/> }/>;
      
      {/* <Route path='*' element = {<Error/>} />;
      <Route path='/favorites' element = {<Favorites/>}/>; */
      /* <h1>Henry Pokemon</h1> */} */
 */ */
      </Routes>

    </div>
  );
};

export default App;
