import React from 'react';
import "./Carousel.css";

function Carousel (props) {
    return(
      <div className= 'container-carousel'>
          <img 
          className='imagen-carousel' 
          // src={`../imagenes/specialist-mini-${props.image}.png`}
          src={require(`../../imagenes/specialist-mini-${props.image}.png`)}
          /*se coloca ../../ para salir dos veces sino causa error de encontrar el archivo */
          alt={props.image}
          />
          <div className ='container-text'>
            <p className='name-carousel'>{props.name}</p>
            <strong className='awards-carousel'>{props.awards}</strong>
            <p className='name-carousel'>{props.text}</p>
          </div>
        </div>
    )
      ;
}

export default Carousel;
