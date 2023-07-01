import { useParams } from "react-router-dom"
import axios from "axios"
import { useState , useEffect} from "react"

const Detail = () => {
    const [character,setCharacter] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <>
        <h1>Detail</h1>
        {
            character?(
                <div>
                    <h2>Name:{character.name}</h2>
                    <h2>state:{character.state}</h2>
                    <h2>species:{character.species}</h2>
                    <h2>gender:{character.gender}</h2>
                    <h2>origin{character.origin?.name}</h2>
                    <img src={character.image} alt={character.name}/>
                </div>
            )
             : (
                '')

        }
        </>
    )
}

export default Detail