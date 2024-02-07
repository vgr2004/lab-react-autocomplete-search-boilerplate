import { useState } from 'react';
import './App.css';
import CountryData from './resources/countryData.json';

function App() {
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue !== "") {
      const newFilteredCountries = CountryData.filter(item =>
        item.name.toLowerCase().startsWith(inputValue.toLowerCase())
      );

      setFilteredCountries(newFilteredCountries);
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      console.log("Escape key pressed");
      setFilteredCountries([]);
    }
  };

  return (
    <>
      <h1>Search</h1>
      <input type="text" onChange={handleInputChange} onKeyDown={handleEscapeKey} />
      <button type='search'>Search</button>
      
      {filteredCountries.map((country, index) => (
        <div key={index}>
          <div className='infoContainer'>
            <p>{country.name}</p>
            <p>{country.code}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
