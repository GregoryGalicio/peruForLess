import React from 'react';
import "./Featured.css";

function Featured (props) {
    return(
      <div className= 'container-featured'>
          <img 
          className='imagen-featured' 
          // src={`../imagenes/specialist-mini-${props.image}.png`}
          src={require(`../../imagenes/${props.preExtension}${props.image}.${props.type}`)}
          /*se coloca ../../ para salir dos veces sino causa error de encontrar el archivo */
          alt={props.image}
          />
          <div className ='container-text'>
            <p className='name-featured'>{props.name}</p>
            <strong className='awards-featured'>{props.awards}</strong>
            <p className='text-featured'>{props.text}</p>
          </div>
        </div>
    )
      ;
}

export default Featured;
