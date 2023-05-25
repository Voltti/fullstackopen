import axios from 'axios';

// Palvelu, joka noutaa sijaintitiedon perusteella paikallisen säätiedon.
const apikey = process.env.REACT_APP_API_KEY;

// Apugfunktio API-kutsun URL:in muotoiluun
const createUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
};

// Funktio säätietojen hakemiseen
const getWeather = latlng => {
  const request = axios.get(createUrl(latlng[0], latlng[1]));
  return request.then(response => response.data);
};

export default getWeather;
