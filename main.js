import displayWeather from './displayWeather';
import './style.css';

function initDOM() {
  displayWeather('Buenos Aires');

  const input = document.querySelector('#place');
  const button = document.querySelector('#search-btn');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    displayWeather(input.value);
  });
}

initDOM();
