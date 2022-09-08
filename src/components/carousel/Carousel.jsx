import React from 'react';
import "./Carousel.css";

function Carousel (props) {
    return(
      <div className= 'container-testimonial'>
          <img 
          className='imagen-testimonial' 
          src={require(`../imagenes/testimonio-${props.imagen}.png`)}
          alt={props.imagen}
          />
          <div className ='container-text'>
            <p className='name-testimonial'>{props.name} en {props.country}</p>
            <p className='cargo-testimonial'>{props.position} en {props.company}</p>
            <p className='text-testimonial'>"{props.testimonial}"</p>
          </div>
        </div>
    )
      ;
}

export default Carousel;
