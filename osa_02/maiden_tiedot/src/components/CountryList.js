const CountryList = ({ countries, handleButtonFilter }) => {
  if (countries.length > 10) {
    return <p>Too many maches, specify another filter</p>;
  } else if (countries.length === 0) {
    return <p>No country found, specify another filter</p>;
  } else if (countries.length === 1) {
    const country = countries[0];
    // console.log(country);
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>
          capital: {country.capital} <br />
          area: {country.area}
        </p>
        <h2>languages:</h2>
        <ul>
          {Object.values(country.languages).map(lang => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <div>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
      </div>
    );
  } else
    return (
      <div>
        <ul>
          {countries.map(country => (
            <li key={country.name.common}>
              {country.name.common}{' '}
              <button onClick={() => handleButtonFilter(country.name.common)}>
                show
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default CountryList;
