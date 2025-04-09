import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';

const API_KEY = '5c0d02d628752df550efe084cbbdafc6';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(stored);
  }, []);

  const fetchWeather = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod !== 200) throw new Error(data.message);
      setWeatherData(data);
      setCity(query);

      const newHistory = [query, ...history.filter(c => c !== query)].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem('history', JSON.stringify(newHistory));
    } catch (err) {
      setError(err.message || 'Error fetching weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
      <RecentSearches history={history} onSelect={fetchWeather} />
    </div>
  );
};

export default App;
