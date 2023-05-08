import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Calculator from "./Components/Calculator"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className='text-center my-5'>Convertisseur Celsius / Fahrenheit</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
