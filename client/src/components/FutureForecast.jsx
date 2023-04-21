import React from 'react';
import PropTypes from 'prop-types';
import ForecastDay from './ForecastDay';

function FutureForecast({ data, location }) {
  const forecastData = data[location].slice(1, 5);

  return (
    <div id="forecast">
      {forecastData.map((dayData) => (
        <ForecastDay dayData={dayData} moonData={data.moonData} key={dayData.datetime} />
      ))}
    </div>
  );
}

export default FutureForecast;

FutureForecast.propTypes = {
  data: PropTypes.shape.isRequired,
  location: PropTypes.string.isRequired,
};
