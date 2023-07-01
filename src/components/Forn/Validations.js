const Validations = (data) => {
  
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/)
    const passwordRegexp = new RegExp (/^[a-z0-9_-]{6,10}$/)

    let errors = {}
    
    if(!emailRegexp.test(data.email)){
        errors.email = "debe ingresar email valido"
    }
    if (!data.email){
        errors.emailVacio ="debes ingresar un enamil"
        }
    if(data.email.length > 35){
        errors.caracteres = "debe ser un email menor a 35 caracteres .debe  tener entre 6 y 10 caracteres"
    }  
    if(!passwordRegexp.test(data.password)){
        errors.password = "debe contener letras y numero, ademas tiene que tener una logitud de 6 a 10 caraeteres"
    }  
    return errors
}
export default Validations;