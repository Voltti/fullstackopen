import { useState, useEffect } from 'react';
import countryService from './services/Countries';
import CountryList from './components/CountryList';
import WeatherData from './services/Weatherdata';
import Weather from './components/Weather';

let allCountries;

const App = () => {
  const [search, setSearch] = useState([]);
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countryService.getAll().then(response => {
      allCountries = response;
      // console.log(response.slice(0, 4));
    });
  }, []);

  const handleSearchChange = event => {
    let countryfilter = allCountries.filter(country =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    const countryfiltercheck = countryfilter.filter(
      country =>
        country.name.common.toLowerCase() === event.target.value.toLowerCase()
    );
    if (countryfiltercheck.length) {
      setCountries(countryfiltercheck);
      checkWeather(countryfiltercheck);
    } else {
      setCountries(countryfilter);
      checkWeather(countryfilter);
    }

    setSearch(event.target.value);
  };

  const handleButtonFilter = event => {
    handleSearchChange({ target: { value: event } });
  };

  const checkWeather = countries => {
    console.log('checkweather: ', countries.length, countries[0], weather);

    if (countries.length === 1) {
      if (
        weather &&
        weather.latlng.toString() === countries[0].capitalInfo.latlng.toString()
      )
        return weather;
      else {
        // console.log('latlng: ', countries[0].capitalInfo.latlng);
        WeatherData(countries[0].capitalInfo.latlng)
          .then(response => {
            console.log('response: ', response);
            setWeather({
              name: countries[0].capital[0],
              latlng: countries[0].capitalInfo.latlng,
              wind: response.wind.speed,
              temperature: response.main.temp,
              icon: response.weather[0].icon,
            });
          })
          .catch(error => console.log(error.message));
        // console.log(countries[0].capital, weather);
      }
    } else return null;
  };

  return (
    <div>
      <h2>Find countries</h2>
      <input value={search} onChange={handleSearchChange} />
      <CountryList
        countries={countries}
        handleButtonFilter={handleButtonFilter}
      />
      <Weather weather={weather} />
    </div>
  );
};

export default App;
