import React from 'react';
import "./Body.css";

function Body (props){
    return(
      <div className= 'container-body'>
        <div className='name'>
            <span className='color1'></span>
            Packages
        </div>
        <div className="row">
            
        </div>

        
        ---
        <nav className='nav'>
        <div>
            <a rel="noreferrer" target="_blank" href='https://www.peruforless.com'>
                <img className='logo'
                src={require(`../../imagenes/${props.img}.svg`)}
                alt={props.img}></img>
            </a>
        </div> 
        <div className='buttons'>
            <a  className='phone' rel="noreferrer" href="tel:+1 817 230 4971" >
                <b>+1 817 230 4971</b>
            </a>
            <a className='free-quote' rel="noreferrer" href='https://www.peruforless.com/#form-dream-adventure'>
                <span>Start Planning My Trip</span>
            </a>
            <div className='menu-toggle'>
            <img className='menu'
                src={require(`../../imagenes/${props.img1}.png`)}
                alt={props.img1}></img>
            </div>
        </div>
        </nav>

        </div>
    )
      ;
}

export default Body;