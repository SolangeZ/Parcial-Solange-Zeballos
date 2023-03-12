import React from 'react'

const Card = (props) => {
  return (
                <div>
                    <p>Hola {props.name}</p>
                    <p>Sabemos que tu personaje favorito es:</p>
                    <p>{props.colour}</p>
                </div>
  )
}

export default Card