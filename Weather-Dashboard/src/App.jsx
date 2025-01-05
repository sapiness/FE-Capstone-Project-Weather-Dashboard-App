/**
 * App component
 *
 * @returns {JSX.Element} App component JSX
 */
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
function App() {
  // State variables for input value and weather data
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });
  /**
   * Function to convert date to string format
   *
   * @returns {string} Date string
   */
  const toDateFunction = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const WeekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    return date;
  };
  /**
   * Function to handle search input
   *
   * @param {object} event - Event object
   */
  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput('');
      setWeather({ ...weather, loading: true });
      // API request to fetch weather data
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
      await axios
        .get(url, {
          params: {
            q: input,
            units: 'metric',
            appid: api_key,
          },
        })
        .then((res) => {
          console.log('res', res);
          const data = res.data;
          data.date = toDateFunction();
          setWeather({ data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setInput('');
          console.log('error', error);
        });
    }
  };
  // Auto-update weather data every 5 minutes
  useEffect(() => {
    const updateWeatherData = async () => {
      await search({ key: 'Enter' });
    };
    const intervalId = setInterval(updateWeatherData, 300000);
    return () => clearInterval(intervalId);
  }, [search]);
  return (
    <div className="WeatherCard">
      <h1 className="app-name sm:text-sm md:text-base font-bold">
        Weather Dashboard
      </h1>
      {/* SearchBar component */}
      <SearchBar
        onSearch={search}
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      {/* Display loading animation while fetching data */}
      {weather.loading && (
        <>
          <br />
          <br />
          <Oval type="Oval" color="black" height={50} width={50} />
        </>
      )}
      {/* Display error message if data fetch fails */}
      {weather.error && (
        <>
          <br />
          <br />
          <ErrorMessage />
        </>
      )}
      {/* Display weather data if available */}
      {weather.data && weather.data.main && (
        <WeatherCard weatherData={weather.data} />
      )}
    </div>
  );
}
export default App;