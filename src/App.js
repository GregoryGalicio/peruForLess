import React, {useState} from 'react';
import './App.css';
import Footer from "./components/footer/Footer";

function App() {
  const[darkMode,setDarkMode]=useState(false);
  ;
  
  // const handleClick = () => {
  //       setDarkMode(!darkMode);
  //   }
  return (
    <div className="App">
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
}

export default App;
