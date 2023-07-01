import { useState } from "react";
import  Validations from './Validations.js'


const Formulario = (props) => {
    const {login} = props
    
    const [UserData,setUserData] = useState ({
        email : "",
        password : ""
    })

const [errors,setErrors] = useState({})

const handleChange = (evento) => {

        setUserData({
            ...UserData,
            [evento.target.name] : evento.target.value
        })
    
    setErrors(Validations( {

        ...UserData,
        [evento.target.name] : evento.target.value
      }))
}
const handleSubmit =  (event) =>{
    event.preventDefault()
    login(UserData)
}

    return (
        <>
        <form onSubmit={handleSubmit}> 
            <label>email</label>
            <input 
            type ="email"
            placeholder="email"
            name="email"
            value={UserData.email}
            onChange={handleChange}
            />
{
    errors.email ? (
      <p>{errors.email}</p>
      ):errors.emailVacio?(<p>
        {errors.emailVacio}</p>
      ):(
        <p>{errors.caracteres}</p>
      )
}

            <label>password</label>
            <input type ="password"
            placeholder="password"
            value={UserData.password}
            name="password"
            onChange={handleChange}
            />
            
 {   
    errors.password ? (
      <p>{errors.password}</p>
      ) :
      ''
}
            <button type ="submit"onSubmit={handleSubmit}>Submit</button>
        </form>
        </>
    )
}
export default Formulario;