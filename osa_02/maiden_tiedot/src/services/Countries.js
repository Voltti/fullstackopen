// Palvelu, joka noutaa maiden tiedot Restcountries API:sta

import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/';

// Funktio, joka noutaa ja palauttaa kaikki maatiedot.
const getAll = () => {
  const request = axios.get(`${baseUrl}all`);
  return request.then(response => response.data);
};

const methods = { getAll };

export default methods;
