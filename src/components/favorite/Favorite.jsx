import React from "react";
import style from '../Card/Card.module.css'
import Card from "../Card/Card";
import { connect } from "react-redux"
import {removeFav } from "../../redux/aciones/accions"
import App from "../../App";
function Favorite({myFavorites,onClose,removeFav }){
    function closeFavorite(id){
        onClose(id)
        removeFav (id)
    }
    
    return (
        <div>
            
            { myFavorites &&
            myFavorites.map((element,index)=>{
            return (
            <div key={element.id} className={style.container}>
         <div className={style.containerCard}>
            <div className={style.front}>
                <h2>{element.id}</h2>
                <h2>{element.name}</h2>
                <h2>{element.status}</h2> 
                <img src={element.image}/>
            //   <Card>
            //     key={element.id}
            //     id={element.id}
            //     mane={element.name}
            //     status={element.status}
            //     species={element.species}
            //     gender={element.gender}
            //     origin={element.origin.name}
            //     image={element.image}
            //     onClose={()=>closeFavorite(element.id)}
            //   </Card>
            </div>
            </div>
            </div>
           
              )
           }
        )
            }</div>
    )
}

function mapState(st){
    return {
        myFavorites : st.myFavorites,
    };
}
function mapDispatch(d){
    return{
        removeFav :(id)=>d(removeFav (id))
    }
}
export default connect(mapState,mapDispatch)(Favorite)