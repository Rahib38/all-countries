import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3> Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>

      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"} </button>
      {visited ? " I have visited this country." : " I want to go"}
    </div>
  );
};

export default Country;
