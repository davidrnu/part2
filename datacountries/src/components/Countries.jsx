import Country from "./Country";
import { useEffect, useState } from "react";

const Countries = ({ countries, searchInput }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect (() => {
    setSelectedCountry(null)
  }, [searchInput])

  if (searchInput === "") return <p>Start typing to search for a country</p>;
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length < 1) return <p>No results</p>;

  const getObjectCountry = (country) => {
    return {
        name: country.name.common,
        capital: Object.values(country.capital),
        area: country.area,
        languages: Object.values(country.languages),
        flag: country.flags,
      }
  }

  if (countries.length === 1) return (
    <Country data={getObjectCountry(countries[0])}/>
  )

  const handleShowCountry = (countryName) => {
    const country = countries.find(country => country.name.common === countryName)
    setSelectedCountry(getObjectCountry(country))
  };

  if (selectedCountry) {
    return <Country data={selectedCountry} />
  }

  return (
    <div>
      {countries.map((country) => {
        return (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button id={country.name.common} onClick={() => handleShowCountry(country.name.common)}>
              show
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Countries;
