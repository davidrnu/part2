import { useEffect, useState } from "react";
import weatherServices from "../services/weather";

const Country = ({ data }) => {
  const name = data.name;
  const capital = data.capital;
  const area = data.area;
  const languages = data.languages;
  const flag = data.flag;
  const capitalLat = data.capitalLat;
  const capitalLng = data.capitalLng;
  const [capitalWeather, setCapitalWeather] = useState(null);

  useEffect(() => {
    weatherServices.getWeather(capitalLat, capitalLng).then((response) => {
      setCapitalWeather(response);
    });
  }, [capitalLat, capitalLng]);

  if (!capitalWeather) {
    return null;
  }

  const code = capitalWeather.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${code}@2x.png`

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Capital {capital.join(", ")}
        <br />
        Area {area}
      </p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag.png} alt={flag.alt} />
      <h2>Weather in {capital[0]}</h2>
      <p>
        Temperature {capitalWeather.main.temp} Celsius <br />
        <img src={iconUrl}/> <br/>
        Wind {capitalWeather.wind.speed} m/s
      </p>
    </div>
  );
};

export default Country;
