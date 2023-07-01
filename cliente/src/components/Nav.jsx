import SearchBar from './SeacchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'

  const Nav = (props) => {
    const { onSearch} =  props
    return(
        <>
        <SearchBar onSearch ={onSearch}/>
       
        <Link to='/abault'>
            <button>Abault</button>
            </Link>
        <Link to ='/home'>
            <button>Home</button>
            </Link>
        <Link to ='/favorite'>
            <button>Favorite</button>
            </Link>
     </>
    )
}
export default Nav