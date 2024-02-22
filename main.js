/* eslint-disable no-console */
import './style.css';

const fetchWeather = async (place) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=871095751e4844aa8e6171949242002&q=${place}&aqi=no`
  );

  const data = await response.json();

  const humidity = await data.current.humidity;
  const tempC = await data.current.temp_c;
  const tempF = await data.current.temp_f;
  const isDay = (await data.current.is_day) === 1;
  const condIcon = await data.current.condition.icon;
  const condText = await data.current.condition.text;
  const location = await data.location.name;
  const feelsLikeC = await data.current.feelslike_c;

  return {
    humidity,
    tempC,
    tempF,
    isDay,
    condIcon,
    condText,
    location,
    feelsLikeC,
  };
};

const displayWeather = async (place) => {
  const weatherInfoDiv = document.querySelector('#weather-info');
  const weatherIcon = document.querySelector('.weather-icon');

  weatherInfoDiv.textContent = 'loading...';

  try {
    const { tempC, humidity, isDay, condIcon, condText, location, feelsLikeC } =
      await fetchWeather(place);

    const time = isDay ? 'day' : 'night';
    weatherIcon.src = condIcon;
    weatherInfoDiv.textContent = `It's a ${condText} ${time} in ${location} with ${tempC}° C and ${humidity}% humidity. Feels like ${feelsLikeC}° C`;
  } catch (err) {
    weatherInfoDiv.textContent = `Couldn't find what you were looking for`;
  }
};

displayWeather('Buenos Aires');

(() => {
  const input = document.querySelector('#place');
  const button = document.querySelector('#search-btn');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    displayWeather(input.value);
  });
})();
