import { useState, useEffect } from 'react';
import countryService from './services/Countries';
import CountryList from './components/CountryList';

let allCountries;

const App = () => {
  const [search, setSearch] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then(response => {
      allCountries = response;
      console.log(response.slice(0, 4));
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
    if (countryfiltercheck.length) setCountries(countryfiltercheck);
    else setCountries(countryfilter);
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Find countries</h2>
      <input value={search} onChange={handleSearchChange} />
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
