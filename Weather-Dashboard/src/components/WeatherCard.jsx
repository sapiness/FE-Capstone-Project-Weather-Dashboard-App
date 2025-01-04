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


// .app-name {
// 	font-size: 2.3rem;
// 	color: rgb(17, 144, 0);
// 	margin-bottom: 16px;
// }

// .App {
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	width: 600px;
// 	min-height: 440px;
// 	background-color: rgba(255, 255, 255, 0.705);
// 	text-align: center;
// 	margin: 128px auto;
// 	border-radius: 10px;
// 	padding-bottom: 32px;
// 	box-shadow: 0 8px 16px rgba(93, 93, 93, 0.397);
// }

// .city-search {
// 	width: 100%;
// 	max-width: 400px;
// 	box-sizing: border-box;
// 	border: 2px solid rgb(204, 204, 204);
// 	outline: none;
// 	border-radius: 20px;
// 	font-size: 16px;
// 	background-color: #e5eef0;
// 	background-position: 10px 12px;
// 	background-repeat: no-repeat;
// 	padding: 12px 40px 12px 40px;
// 	-webkit-transition: width 0.4s ease-in-out;
// 	transition: width 0.4s ease-in-out;
// 	color: #333;
// }

// .city-search:focus {
// 	width: 100%;
// }

// .city-name {
// 	font-size: 1.5rem;
// 	color: #444;
// 	margin-bottom: 8px;
// }

// .date {
// 	font-size: 1.25em;
// 	font-weight: 500;
// 	color: #777;
// }

// .icon-temp {
// 	font-size: 1.75rem;
// 	font-weight: 700;
// 	color: #1e2432;
// 	text-align: center;
// }

// .deg {
// 	font-size: 1.3rem;
// 	vertical-align: super;
// }

// .des-wind {
// 	font-weight: 500;
// 	color: #666;
// }

// .error-message {
// 	display: block;
// 	text-align: center;
// 	color: #d32f2f;
// 	font-size: 24px;
// 	margin-top: auto;
// }

// .Loader {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 100%;
// }

// .Loader>div {
// 	margin: 0 auto;
// }

// .weather-icon {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }

// .weather-icon img {
// 	width: 100px;
// 	height: 100px;
// 	border-radius: 50%;
// 	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// }
 
