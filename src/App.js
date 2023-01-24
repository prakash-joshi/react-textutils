import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const showAlert =()=>{
    
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <NavBar title="Text Utils" home="Home" about="About-Us" mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
