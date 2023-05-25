// Komponentti säätietojen esittämiseen

const Weather = ({ weather }) => {
  // console.log('component data: ', weather);
  if (weather) {
    return (
      <>
        <h2>Weather in {weather?.name}</h2>
        <p>
          Temperature: {weather?.temperature} celsius
          <br />
          <img
            src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
          />
          <br />
          Wind: {weather?.wind} m/s
        </p>
      </>
    );
  }
};

export default Weather;
