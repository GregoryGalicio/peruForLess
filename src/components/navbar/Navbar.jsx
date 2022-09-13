import React from 'react';
import "./Navbar.css";

function Navbar (props){
    return(
      <div className= 'container-navbar'>
        <nav>
        <div>
            <a rel="noreferrer" target="_blank" href='https://www.peruforless.com'>
                <img className='logo'
                src={require(`../../imagenes/${props.img}.svg`)}
                alt={props.img}></img>
            </a>
        </div> 
        <div></div>
        </nav>

        </div>
    )
      ;
}

export default Navbar;