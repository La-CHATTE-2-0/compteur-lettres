import './App.css';
import Afficheur from './Afficheur';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <label for="input" class="form-label">Lettres</label>
      <textarea className="form-control" id="input" value={value} onChange={handleChange}></textarea>
      <Afficheur text={value} />
    </div>
  );
}

export default App;
