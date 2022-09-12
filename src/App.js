import React, {useState} from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Footer from "./components/footer/Footer";
import Head from './components/head/Head';
import { dataBaseSpecialists } from './dataBaseSpecialists.js';
import {dataBaseFeatured} from './dataBaseFeatured';


function App() {
  const[darkMode,setDarkMode]=useState(false);
  ;
  
  // const handleClick = () => {
  //       setDarkMode(!darkMode);
  //   }
  return (
    <div className="App">
      <Head
      img="home"
      ></Head>
      <div className Featured>
      {dataBaseFeatured.map((dataBaseFeatured, index) => {
        return (
          <Carousel
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
      <div className='container1'>
        <h1>The Peru Specialist</h1>
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

     
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
}

export default App;
