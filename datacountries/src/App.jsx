import { useEffect, useState } from "react";
import countrieServices from "./services/countries";
import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    countrieServices
      .getCountries()
      .then((countries) => setCountries(countries));
  }, []);


  if (!countries) {
    return null;
  }

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  const selectedCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchCountry.toLowerCase().trim())
  );

  return (
    <div>
      <Search
        searchValue={searchCountry}
        searchValueHandler={handleSearch}
      />

      <Countries searchInput={searchCountry} countries={selectedCountries} />
    </div>
  );
};

export default App;
