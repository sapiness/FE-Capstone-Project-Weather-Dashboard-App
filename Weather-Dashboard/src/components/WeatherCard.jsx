/* eslint-disable react/prop-types */
/**
 * WeatherCard component
 *
 * Displays the current weather data for a given city, including the city name, date, temperature, humidity, wind speed, and weather description.
 *
 * @param {object} props
 * @param {object} props.weatherData - Weather data object containing the city's weather information
 * @returns {JSX.Element} WeatherCard component JSX
 */
import React from 'react';
/**
 * WeatherCard function component
 */
function WeatherCard({ weatherData }) {
  // Destructure weather data object into individual variables
  const { name, sys, main, weather, wind } = weatherData;
  return (
    // WeatherCard container
    <div>
      {/* City name and country */}
      <div className="city-name">
        <h2>
          {name}, <span>{sys.country}</span>
        </h2>
      </div>
      {/* Current date */}
      <div className="date">
        <span>{weatherData.date}</span>
      </div>
      {/* Weather icon and temperature */}
      <div className="icon-temp">
        {/* Weather icon from OpenWeatherMap */}
        <img
          className="sm:w-50px h-50px md:w-80px h-80px lg:w-120px h-120px sm:mx-auto bg-green-600 "
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        {/* Temperature details */}
        <div className="temp-details">
          <p>Temperature: {Math.round(main.temp)}°C</p>
          {/* <p>Feels like: {Math.round(main.feels_like)}°C</p> */}
        </div>
      </div>
      {/* Weather description and additional details */}
      <div className="des-wind">
        <p>{weather[0].description.toUpperCase()}</p>
        <div className="additional-details">
          <p>Humidity: {main.humidity}%</p>
          <p>Wind Speed: {wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherCard;









