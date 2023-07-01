import style from './SearchBar.module.css';
import imagenLogo from '../../imagenes/imagen.jpg'
import { useState } from 'react';

export default function SearchBar(props) {
   let [id , setId] =  useState('')

   const handleEnter = (event) =>{
      if (event.key === 'Enter') {
         props.onSearch(id);
      }
   } 
   const handleChange  = (evento) =>{
      setId(evento.target.value)
   }  
   return (
      <div className = {style.containerSearch}>
         <img 
         src = {imagenLogo}
         alt = "logo reck and morty"
         className={style.logo} 
         />
         
         <div className={style.containerInput}>
          <input 
          type='search'
          placeholder='search...'
          className={style.input}
          onKeyUp={handleEnter}
          onChange={handleChange}
          value ={id}
          />
          <button 
            onClick={ ()=>props.onSearch(id)}
            className={style.btn}
          >

          </button>
         </div>
         {/* <input type='search'/>
         <button onClick={SearchBar}>Agregar</button> */}
      </div>
   );
}
