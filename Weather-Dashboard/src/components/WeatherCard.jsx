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
    // WeatherCard container with mobile responsiveness
    <div className="">
      {/* City name and country */}
      <div className="city-name flex justify-center mb-4">
        <h2 className=" font-bold md:text-3xl lg:text-4xl">
          {name}, <span className="text-lg font-normal text-gray-600">{sys.country}</span>
        </h2>
      </div>
      {/* Current date */}
      <div className="date text-center mb-4">
        <span className="text-lg font-medium text-gray-600">{weatherData.date}</span>
      </div>
      {/* Weather icon and temperature */}
      <div className="icon-temp flex flex-col justify-center mb-4">
        {/* Weather icon from OpenWeatherMap */}
        <img
          className="  sm:mx-auto bg-green-600 mt-10px mb-10px"
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        {/* Temperature details */}
        <div className="temp-details ml-4 text-lg font-medium text-gray-600">
          <p>Temperature: {Math.round(main.temp)}°C</p>
          {/* <p>Feels like: {Math.round(main.feels_like)}°C</p> */}
        </div>
      </div>
      {/* Weather description and additional details */}
      <div className="des-wind text-center mb-4">
        <p className="text-lg font-medium text-gray-600">{weather[0].description.toUpperCase()}</p>
        <div className="additional-details mt-2">
          <p className="text-lg font-medium text-gray-600">Humidity: {main.humidity}%</p>
          <p className="text-lg font-medium text-gray-600">Wind Speed: {wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherCard;
