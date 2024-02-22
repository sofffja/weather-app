export default async function fetchWeather(place) {
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
}
