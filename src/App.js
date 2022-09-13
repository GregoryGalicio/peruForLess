import React, {useState} from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Footer from "./components/footer/Footer";
import Head from './components/head/Head';
import { dataBaseSpecialists } from './dataBaseSpecialists.js';
import {dataBaseFeatured} from './dataBaseFeatured';
import Featured from './components/Featured/Featured';
import Navbar from './components/navbar/Navbar';


function App() {
  const[darkMode,setDarkMode]=useState(false);
  ;
  
  // const handleClick = () => {
  //       setDarkMode(!darkMode);
  //   }
  return (
    <div className="App">
      <Navbar
      img="pfl-logo-1"
      ></Navbar>
      <Head
      img="home"
      img1="trustpilot-new-home"
      imgWatch="watch-icon"
      ></Head>
      <div className='containerFeatured'>
        <div className="subtext">Featured in:</div>
        <div className='featured'>
      {dataBaseFeatured.map((dataBaseFeatured, index) => {
        return (
          <Featured
          name={dataBaseFeatured.name}
          image={dataBaseFeatured.image}
          awards={dataBaseFeatured.awards}
          text={dataBaseFeatured.text}
          key={index}
          preExtension="i-"
          type="svg"
          />
        );
      })}
      </div>
      </div>
      
      <div className='container1'>
        <div className='subtext1'>The Peru Specialist</div>
        <div className="container2">
        {dataBaseSpecialists.map((dataBaseSpecialists, index) => {
        return (
          <Carousel
          name={dataBaseSpecialists.name}
          image={dataBaseSpecialists.image}
          awards={dataBaseSpecialists.awards}
          text={dataBaseSpecialists.text}
          key={index}
          type="png"
          preExtension="specialist-mini-"
          />
        );
      })}
        </div>
      </div>
      <br></br>
      <br></br><br></br>

      <div className='containerFeatured'>
        <div className='featured'>
      {dataBaseFeatured.map((dataBaseFeatured, index) => {
        return (
          <Featured
          name={dataBaseFeatured.name}
          image={dataBaseFeatured.image}
          awards={dataBaseFeatured.awards}
          text={dataBaseFeatured.text}
          key={index}
          preExtension="i-"
          type="svg"
          />
        );
      })}
      </div>
      </div>
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
}

export default App;
