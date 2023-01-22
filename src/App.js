import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor ='white'
    }
  }

  return (
    <>
      <NavBar title="Text Utils" home="Home" about="About-Us" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <div className="container my-3 mx-3">
        <TextForm heading ="Enter the text to analyze below."/>
      </div>
    </>
  );
}

export default App;
