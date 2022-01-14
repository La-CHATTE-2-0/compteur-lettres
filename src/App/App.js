import React, { useState } from 'react';
import './App.css';
import OccurencesTable from './components/OccurencesTable';
import { ExportOccurences, excludedChars } from "./tools/occurencesTool"
import XlsExport from "xlsexport"

function App() {

  const [value, setValue] = useState("");
  const [memeInsigne, setMemeInsigne] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCustomInput = (event) => {
    console.log(event.target.textContent)
    let inputElement = document.getElementById("input")
    inputElement.innerHTML += event.target.textContent
    setValue(inputElement.innerHTML);
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
      <textarea className="form-control mt-2 mb-2" id="input" value={value} onChange={handleChange}></textarea>

      <div className="form-check form-switch mb-2">
        <input
          className='form-check-input'
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          defaultChecked={memeInsigne}
          onChange={handleSwitchMemeInsigne} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Insignes identiques</label>
      </div>

      <div className='btn-group mb-2'>
        {
          "¹²³⁴⁵⁶⁷⁸⁹⁰".split("").map(element => {
            return (
              <button
                onClick={handleCustomInput}
                type="button"
                className="btn btn-outline-secondary"
                key={element}
              >
                {element}
              </button>
            )
          })
        }
      </div>
      <div className='btn-group mb-2'>
        {
          ["β", "ε", "ϕ", "𝛾"].map(element => {
            return (
              <button
                onClick={handleCustomInput}
                type="button"
                className="btn btn-outline-secondary"
                key={element}
              >
                {element}
              </button>
            )
          })
        }
      </div>

      <div>
        <button id="export" type="button" className="btn btn-dark" onClick={handleExport}>Export en XLS</button>
      </div>
      <OccurencesTable text={value} boolMemeInsigne={memeInsigne} />
    </div>
  );
}

export default App;
