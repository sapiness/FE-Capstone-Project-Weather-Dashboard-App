/* eslint-disable react/prop-types */

import React from 'react';
function WeatherCard({ weatherData }) {
  const { name, sys, main, weather, wind } = weatherData;
  return (
    <div>
      <div className="city-name">
        <h2>
          {name}, <span>{sys.country}</span>
        </h2>
      </div>
      <div className="date">
        <span>{weatherData.date}</span>
      </div>
      <div className="icon-temp">
        <img
          className="sm:w-50px h-50px md:w-80px h-80px lg:w-120px h-120px sm:mx-auto bg-green-600 "
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <div className="temp-details">
          <p>Temperature: {Math.round(main.temp)}°C</p>
          {/* <p>Feels like: {Math.round(main.feels_like)}°C</p> */}
        </div>
      </div>
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

