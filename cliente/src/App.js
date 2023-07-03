import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SeacchBar/SearchBar.jsx';
// import characters from './data.js';
import Nav from './components/Nav.jsx';
import { useState,useEffect } from 'react';
import axios from 'axios'
import {Routes,Route,useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import Abault from './components/Abault/Abault.jsx';
import Formulario   from './components/Forn/Formulario.jsx';
import { navigate } from 'react-router-dom'
import Favorite from "./components/favorite/Favorite.jsx"


// function App() {
//    function onSearch(characterID){
//    window.alert(characterID)
// }
//    return (
//       <div className='App'>
//          <SearchBar onSearch={(onSearch)}/>
//          <Cards characters ={characters} />  
//          </div>
   
//    );
// }
function App(){
   let [characters , setCharacters] =  useState ([])
   const [access,setAccess] = useState (false)
   const EMAIL = "federico_matias_flores@hotmail.com"
   const PASSWORD = "fede1234"

   const {pathname} = useLocation()
   const navigate = useNavigate()

   function onSearch(id) {
      axios(`http://localhost:3001/rickendmorty/character/${id}`).then(({ data }) => {
         const char =  characters?.find(e => e.id === data.id)
         if (char) {
            window.alert('¡No hay personajes con este ID!');
         } else if(data.id !== undefined){
            setCharacters(characters=>[...characters,data])
         }
         else {
            alert ("character no faut")
         }
           }
      
      )
   }
   
   const login =(userData) =>{
      if (userData.password === PASSWORD &&
          userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }   
return console.log("error de contraseña o mail ")
   }
   
useEffect(()=>{

      !access && navigate ('/') }, [access,navigate])

   const onClose = (id) => {
      setCharacters (
         characters.filter((character)=> character.id !== Number(id)
         )
      )
   }
   return (
      <div className='container'>
        {/* <Nav onSearch ={onSearch}/> */}
        {pathname !== '/' && <Nav onSearch
         ={onSearch}/> }
        <Routes>
      
          <Route path = '/' element ={<Formulario
           login={login}  />} />

          <Route path='/home' element=
         {<Cards characters={characters}
           onClose = {onClose}/>}/>
        
          <Route path='/abault' element={< Abault/>}/>
            <Route path='/favorite' element = {<Favorite onClose={onClose}/>}></Route>
          <Route path='/detail/:id' element={<Detail/>}/>
        
         
         
         {/* <SearchBar
         onSearch ={(charactersID) => window.alert(charactersID)}/> */}
         {/* <Cards
          characters={ characters }
           onCloses = {onClose}   
           
           
         /> */}
         </Routes>
          </div>
   )
}

export default App;
