import React, {useState} from 'react'
import Card from './Card'
import { Input } from './FormStyles'

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [personaje, setPersonaje] = useState('')
    const [validar, setValidar] = useState(false)
    const [card, setCard] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(personaje);

        let vcaracteres3;
        let vcaracteres6;

        if (nombre.trim().length >= 3) {
            vcaracteres3 = true
        }
        else{
            vcaracteres3 = false;
        }

        if (personaje.length >= 6) {
            vcaracteres6 = true
        }else{
        vcaracteres6 = false;
    }   
    
    if (vcaracteres3 === true && vcaracteres6 === true) {
        setValidar(false);
        setCard(true);
    }else{
        setValidar(true);
    }

    }
//handleSubmit.reset.Form(...values);
    return (
    <>
    <form id='formulario' onSubmit={handleSubmit}>
<Input type={"text"} placeholder={"Escriba su nombre "} value = {nombre} 
    onChange={(e) => { setNombre(e.target.value)}
    }      
    />
<Input type={"text"} placeholder={"Ingresa tu personaje favorito de los Simpson"} value = {personaje} 
    onChange={(e) => { setPersonaje(e.target.value)}
    }      
    /> 
    </form>
    <div>
    <button form="formulario" btn="submit">Enviar</button>
    </div>

    {
        validar && (<p id = "error-message">Por favor chequea que la información sea correcta</p>)
    }

    {
        card && (<Card name={nombre} personaje={personaje}/>)  
    } 
    </> 
    )
}

export default Form