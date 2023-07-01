import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props){
   const {characters,onClose} =  props ;
   
   return(
    
    <div className={style.container}>
        {
        characters.map((character)=>{ /* characters?.map((character)=>{ : ? se suele colocar para darle un tiempo de respuesta  ya que ese caracters
          suele ser una api externa.para darle tiempo para que no colisione el codido ,se hace esta peticion , que pregunta si hay algo en el character en este caso*/
           return (
          <Card 
        key ={character.id}
        id = {character.id}
        name = {character.name}
        status ={character.status}
        species = {character.species}
        gender = {character.gender}
        origin ={character.origin.name}
        image ={character.image}
        onClose ={onClose}
        />
        )
      })}
      </div>
      )
}

