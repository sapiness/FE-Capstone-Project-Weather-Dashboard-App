
import './App.css'
// import './index.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';


function App() {
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });
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
  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput('');
      setWeather({ ...weather, loading: true });
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

  return (
    <div className="App">

      <h1 className="app-name sm:text-sm md:text-base font-bold">Weather Dashboard</h1>
      <SearchBar
        onSearch={search}
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      {weather.loading && (
        <>
          <br />
          <br />
          <Oval type="Oval" color="black" height={50} width={50} />
        </>
      )}
      {weather.error && (
        <>
          <br />
          <br />
          <ErrorMessage />
        </>
      )}
      {weather.data && weather.data.main && (
        <WeatherCard weatherData={weather.data} />
      )}
    </div>
  );
}

export default App;

