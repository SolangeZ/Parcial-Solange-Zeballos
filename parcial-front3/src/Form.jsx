import React, {Fragment, useState} from 'react'
import Card from './Card'
import { Input } from './FormStyles'

const Form = () => {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [validar, setValidar] = useState(false)
    const [card, setCard] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);
        console.log(color);

        let vcaracteres3;
        let vcaracteres6;

        if (nombre.trim().length >= 3) {
            console.log("Es mayor a 3 caracteres");
            vcaracteres3 = true
        }
        else{
            console.log("Es menor a 3 caracteres");
            vcaracteres3 = false;
        }

        if (color.length >= 6) {
            console.log("Es mayor a 6 caracteres");
            vcaracteres6 = true
        }else{
        console.log("Es menor a 6 caracteres");
        vcaracteres6 = false;
    }   
    
    if (vcaracteres3 === true && vcaracteres6 === true) {
        setValidar(false);
        setCard(true);
    }else{
        setValidar(true);
    }

    }
//handleSubmit.resetForm(...);
    return (
    <>
    <form id='formulario' onSubmit={handleSubmit}>
<Input type={"text"} placeholder={"Escriba su nombre "} value = {nombre} 
    onChange={(e) => { setNombre(e.target.value)}
    }      
    />
<Input type={"text"} placeholder={"Ingrese tu personaje de los Simpsons favorito"} value = {color} 
    onChange={(e) => { setColor(e.target.value)}
    }      
    /> 
    </form>
    <div>
    <button form="formulario" btn="submit">Enviar</button>
    </div>

    {
        validar && (<p>Chequear que la informacion sea correcta</p>)
    }

    {
        card && (<Card name={nombre} colour={color}/>)  
    } 
    </>
    )
}

export default Form