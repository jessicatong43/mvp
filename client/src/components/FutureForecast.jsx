import React from 'react';
import ForecastDay from './ForecastDay';

function FutureForecast({ data, location }) {
  console.log('inside futureForecast data: ', data);
  console.log('inside futureForecast location: ', location);
  const forecastData = data[location];

  return (
    <div id="forecast">
      {forecastData.map((dayData) => (
        <ForecastDay dayData={dayData} moonphase={data.moonphase} key={dayData.datetime} />
      ))}
    </div>
  );
}

export default FutureForecast;
