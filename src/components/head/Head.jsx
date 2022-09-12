import React from 'react';
import "./Head.css";

function Head (props){
    return(
      <div className= 'container-head'>
         <div className ='container-text'>
            <h1 className='name-head'>Let us design your trip of a lifetime</h1>
            <br></br>
            <p>.</p>
            {/* <strong className='awards-head'>{props.awards}</strong> */}
            <h2 className='text-head'>Boutique travel to Peru designed for <strong>youu local experts</strong></h2>
          </div>
          <img 
          className='imagen-head'
          src={require(`../../imagenes/${props.img}.png`)}
          alt={props.img}
          />

        </div>
    )
      ;
}

export default Head;