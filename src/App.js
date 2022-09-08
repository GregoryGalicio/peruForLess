import React, {useState} from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';
import Footer from "./components/footer/Footer";
import { dataBaseSpecialists } from './dataBaseSpecialists';

function App() {
  const[darkMode,setDarkMode]=useState(false);
  ;
  
  // const handleClick = () => {
  //       setDarkMode(!darkMode);
  //   }
  return (
    <div className="App">
       {dataBaseSpecialists.map((dataBaseSpecialists, index) => {
        return (
          <Carousel
          name={dataBaseSpecialists.name}
          image={dataBaseSpecialists.image}
          awards={dataBaseSpecialists.awards}
          text={dataBaseSpecialists.text}
          key={index}
          />
        );
      })}
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
}

export default App;
