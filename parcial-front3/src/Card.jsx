import React from 'react'

const Card = (props) => {
  return (
                <div id = "card-container">
                    <p>Hola {props.name},</p>
                    <p>Tu personaje favorito es:</p>
                    <p>{props.personaje}</p>
                </div>
  )
}

export default Card