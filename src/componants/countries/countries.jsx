import { useEffect, useState } from "react";
import Country from "../country";
import "../countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCounteries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCounteries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries {countries.length}</h3>

      <div>
        <h5>Visited Countries: {visitedCounteries.length}</h5>
        <ul>
          {visitedCounteries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedFlags={handleVisitedFlags}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
