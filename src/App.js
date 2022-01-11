import React, { useState } from 'react';
import './App.css';
import Afficheur from './Afficheur';
import { ExportOccurences, excludedChars } from "./Tools"
import XlsExport from "xlsexport"

function App() {

  const [value, setValue] = useState("");
  const [memeInsigne, setMemeInsigne] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function canExport() {
    return value.length > 1 && ![...value].every(char => { return excludedChars.includes(char) })
  }
  const handleExport = () => {
    if (canExport()) {
      const arr = ExportOccurences(value, memeInsigne)
      var xls = new XlsExport(arr, `Export`);
      xls.exportToXLS(`export_lettres_${Date.now().toString()}.xls`);
    }
  };

  const handleSwitchMemeInsigne = () => {
    setMemeInsigne(!memeInsigne)
  }

  return (
    <div className="App">
      <label htmlFor="input" className="form-label">Lettres</label>
      <textarea className="form-control mb-2" id="input" value={value} onChange={handleChange}></textarea>

      <div className="form-check form-switch">
        <input
          className='form-check-input'
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          defaultChecked={memeInsigne}
          onChange={handleSwitchMemeInsigne} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Insignes identiques</label>
      </div>

      <button id="export" type="button" className="btn btn-dark" onClick={handleExport}>Export en XLS</button>
      <Afficheur text={value} boolMemeInsigne={memeInsigne} />
    </div>
  );
}

export default App;
