import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="bg-white rounded-xl shadow p-6 w-80 mx-auto mt-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-2xl">{main.temp}°C</p>
      <p>{weather[0].main}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
