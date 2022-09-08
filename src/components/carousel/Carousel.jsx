import React from 'react';
import "./Carousel.css";

function Carousel (props) {
    return(
      <div className= 'container-carousel'>
          <img 
          className='imagen-carousel' 
          src={`../images/specialist-mini-${props.image}.jpg`}
          // src={require(`../images/specialist-mini-${props.image}.jpg`)}
          alt={props.image}
          />
          <div className ='container-text'>
            <p className='name-carousel'>{props.name}</p>
            <p className='awards-carousel'>{props.awards}</p>
            <p className='text-carousel'>{props.text}</p>
          </div>
        </div>
    )
      ;
}

export default Carousel;
