import React from 'react';
import "./Head.css";
import ReactPlayer from 'react-player';

function Head (props){
    return(
      <div className= 'container-head'>
         <div className ='container-textHead'>
            <h1 className='name-head'>Let us design your trip of a lifetime</h1>
            <hr></hr>
            {/* <strong className='awards-head'>{props.awards}</strong> */}
            <h2 className='text-head'>Boutique travel to Peru designed for you by <strong>local experts</strong></h2>
            <a rel="noreferrer" target="_blank" href='https://www.trustpilot.com/categories/travel_agency?numberofreviews=0&status=all&timeperiod=0'>
            <img 
          className='imagen-trust'
          src={require(`../../imagenes/${props.img1}.svg`)}
          alt={props.img1}
          />
            </a>
            <br></br>
            <br></br>
            <span>
              <div className='play-video'>
                {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=QCY-Yg3Rgmk"
                width="100%"
                height="100%"
                /> */}
                <img
                className='imagen-watch'
                src={require(`../../imagenes/${props.imgWatch}.svg`)}
                alt={props.imgWatch}>
                </img>
                <div>watch</div>
              </div>
            </span>
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