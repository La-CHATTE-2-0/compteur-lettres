import React, { useState } from 'react';
import './App.css';
import Afficheur from './Afficheur';
import { ExportOccurences, excludedChars } from "./Tools"
import XlsExport from "xlsexport"

function App() {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleExport = () => {
    if (value.length > 1 && ![...value].every(char => { return excludedChars.includes(char)})) {
      const arr = ExportOccurences(value)
      var xls = new XlsExport(arr, `Export`);
      xls.exportToXLS(`export_lettres.xls`);
    }  
  };

  return (
    <div className="App">
      <label htmlFor="input" className="form-label">Lettres</label>
      <textarea className="form-control" id="input" value={value} onChange={handleChange}></textarea>
      <button id="export" type="button" className="btn btn-dark" onClick={handleExport}>Export en XLS</button>
      <Afficheur text={value} />
    </div>
  );
}

export default App;
