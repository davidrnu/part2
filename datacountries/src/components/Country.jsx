const Country = ({ data }) => {
  const name = data.name;
  const capital = data.capital.join(", ");
  const area = data.area;
  const languages = data.languages;
  const flag = data.flag

  console.log(data);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Capital {capital}
        <br />
        Area {area}
      </p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag.png} alt={flag.alt}/>
    </div>
  );
};

export default Country;
