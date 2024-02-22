import fetchWeather from './fetchWeather';

const weatherInfoDiv = document.querySelector('#weather-info');
const weatherIcon = document.querySelector('.weather-icon');

export default async function displayWeather(place) {
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
}
