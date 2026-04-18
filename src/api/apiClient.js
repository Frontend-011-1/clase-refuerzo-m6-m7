import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    units: 'metric',
    lang: 'es',
    appid: import.meta.env.VITE_API_KEY,
  },
});
