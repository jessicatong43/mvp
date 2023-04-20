import React, { useEffect } from 'react';
import ForecastDay from './ForecastDay';

function FutureForecast({ data, location }) {
  const forecastData = data[location]?.slice(1, 5);

  return (
    <div id="forecast">
      {forecastData?.map((dayData) => (
        <ForecastDay dayData={dayData} moonData={data.moonData} key={dayData.datetime} />
      ))}
    </div>
  );
}

export default FutureForecast;
