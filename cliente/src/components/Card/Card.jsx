import style from './Card.module.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import {REMOVE_FAV, ADD_FAV } from "../../redux/aciones/tipy_acciones"
import {connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/aciones/accions';

function Card(props) {
  const {id,name,gender,species,image,status,origin,onClose,addFav,removeFav,  myFavorites} =  props
  
  const[isFav,setIsFav] = useState(false)

  function handleFavorite(){
   if(isFav){
      setIsFav(false);
      removeFav(id)
   }else{
      setIsFav(true);
      addFav (props)  
   }
  }
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
  return (
      <div className={style.container}>
         <div className={style.containerCard}>
            <div className={style.front}>
               <img
                 src={image}
                 alt = {name}
                 className={style.image}
               />
            </div>

            <div className={style.back}>
            {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
               <button 
                className={style.btn}
                onClick={()=>onClose(id)}
                > 
                X
               </button>
               <Link to ={`/Detail/${id}`}>
                 <h2>{name}</h2>
               </Link>
               
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{status}</h2> 
               <h2>{origin}</h2>


            </div>
         </div>
      </div>
      //    <div className="cart">
      //    <button onClick={onClose}>X</button>
          
      //    <h2>  {name}  </h2>
      //    <h2> {status} </h2>
      //    <h2> {species}</h2>
      //    <h2 > {gender}</h2> 
      //    <h2 > {origin.name}</h2>
      //     <img src={image} alt={name} />
      // </div>
   );
}
function mapStateToProp(state){
   return {
      myFavorites :state.myFavorites
   }
}
function mapDispachToProp(dispatch) {
   return {
     addFav: (ch) => dispatch(addFav(ch)),
     removeFav: (id) => dispatch(removeFav(id)),
   };
 }
export default connect(mapStateToProp,mapDispachToProp)(Card)