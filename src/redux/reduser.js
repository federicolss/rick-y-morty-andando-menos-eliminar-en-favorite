import { ADD_FAV,REMOVE_FAV} from "./aciones/tipy_acciones.js"

const initialState = {
  data:[],
  myFavorites:[],
}
export default function rootReducer (state = initialState,{type,payload}){
    switch (type) {
        // Aquí deberías manejar las acciones ADD_FAV y REMOVE_FAV según corresponda
        case ADD_FAV:
          // Realiza las modificaciones necesarias en el estado para la acción ADD_FAV
          return{
            ...state,
            myFavorites:[...state.myFavorites,payload],} 
            
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((ch)=>ch.id !== payload)
            return{
              ...state,
              myFavorites: newFavorites,
            }
            // Realiza las modificaciones necesarias en el estado para la acción REMOVE_FAv
            
        default:
          return state
      }
}
