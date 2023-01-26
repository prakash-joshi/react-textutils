import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled", "success");
    }
  }

  return (
    <>
      <NavBar title="Text Utils" home="Home" about="About-Us" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <Alert alert={alert} />
      <div className="container my-3 mx-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below." />
      </div>
    </>
  );
}

export default App;
