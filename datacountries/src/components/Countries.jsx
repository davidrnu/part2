import Country from "./Country";

const Countries = ({ countries, searchInput }) => {
  if (searchInput === "") return <p>Start typing to search for a country</p>;
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length < 1) return <p>No results</p>;

  if (countries.length === 1) {
    const country = countries[0];
    const dataObject = {
      name: country.name.common,
      capital: Object.values(country.capital),
      area: country.area,
      languages: Object.values(country.languages),
      flag: country.flags
    };
    console.log(dataObject.flag)
    return <Country data={dataObject} />
  }

  return (
    <div>
      {countries.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default Countries;
