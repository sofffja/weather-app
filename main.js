/* eslint-disable no-console */
import './style.css';

const fetchWeather = async () => {
  const response = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=871095751e4844aa8e6171949242002&q=Buenos Aires&aqi=no'
  );

  const data = await response.json();

  const humidity = await data.current.humidity;
  const tempC = await data.current.temp_c;
  const tempF = await data.current.temp_f;
  const isDay = (await data.current.is_day) === 1;

  return { humidity, tempC, tempF, isDay };
};

const displayWeather = async () => {
  const { tempC, humidity, isDay } = await fetchWeather();
  const weatherInfoDiv = document.querySelector('#weather-info');

  weatherInfoDiv.style.background = isDay ? 'orange' : 'blue';
  weatherInfoDiv.textContent = `${tempC}° C - ${humidity}% humidity`;
};

displayWeather();
