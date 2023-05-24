import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;

const createUrl = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`;
};

const getWeather = latlng => {
  const request = axios.get(createUrl(latlng[0], latlng[1]));
  return request.then(response => response.data);
};

export default getWeather;
