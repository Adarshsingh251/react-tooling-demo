import React, { useState } from 'react';
import './App.css';

const API_KEY = 'b55a7f11977e217b2f9e217aa28577ce';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  async function fetchWeather() {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const json = await res.json();
    setData(json);
  }

  return (
    <div className="app">
      <h1>🌦 Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {data && data.main ? (
        <div className="card">
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>🌡 {data.main.temp} °C</p>
        </div>
      ) : (
        data && <p>City not found</p>
      )}
    </div>
  );
}

export default App;
