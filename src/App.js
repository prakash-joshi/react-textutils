import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title="Text Utils" home="Home" about="About-Us" />
      {/* <NavBar /> */}
      <div className="container my-3 mx-3">
        <TextForm heading ="Enter the text to analyze below."/>
      </div>
    </>
  );
}

export default App;
