import './App.css';
import React, {useState} from 'react';
import InputForm from './components/InputForm';
import RampInput from './components/RampInput';


function App() {
  const [inputs, setInput] = useState('');
  // const inputText = '';

  const addInput = input => {
    const newInput = [input];
    setInput(newInput);
    // debugger;
    console.log(input);
    
    // inputText = input;
  }
  // debugger;
  return (
    
    <div className="App">

      <h1><div id="ramp-logo"></div> Ramp 3 Input</h1>
      <InputForm
        onSubmit={addInput}
      />
      <RampInput value={inputs[0]}/>
      {console.log(inputs)}
    </div>
  );
}

export default App;
