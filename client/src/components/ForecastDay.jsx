import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../../dist/assets/images/index';

function ForecastDay({ dayData, moonData }) {
  const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
  const date = (new Date(dayData.datetime)).toLocaleDateString('en-US', dateOptions);
  let score = 0;

  // Cloud cover
  let cloudCover = 'Cloudy';
  let cloudCoverIcon = IMAGES.cloudyIcon;
  let coverClass = 'cloudy';
  if (dayData.cloudcover <= 20) {
    score += 4;
    cloudCover = 'Clear skies';
    cloudCoverIcon = IMAGES.clearSkyIcon;
    coverClass = 'clear';
  } else if (dayData.cloudcover <= 35) {
    score += 2.5;
    cloudCover = 'Partly cloudy';
    cloudCoverIcon = IMAGES.partlyCloudyIcon;
    coverClass = 'partlyCloudy';
  } else if (dayData.cloudcover <= 50) {
    score += 1;
  }

  // Humdity
  if (dayData.humidity <= 45) {
    score += 3;
  } else if (dayData.humidity <= 55) {
    score += 1.5;
  }

  // Visibility
  if (dayData.visibility >= 8) {
    score += 2;
  } else if (dayData.visibility >= 6) {
    score += 1;
  }

  // Moon Phase
  let moonPhase = 'Full moon';
  let moonIcon = IMAGES.fullMoonIcon;
  if (moonData === 0) {
    score += 3;
    moonPhase = 'New moon';
    moonIcon = IMAGES.newMoonIcon;
  } else if (moonData <= 0.14) {
    score += 3;
    moonPhase = 'Waxing crescent';
    moonIcon = IMAGES.waxingCrescentIcon;
  } else if (moonData >= 0.88) {
    score += 3;
    moonPhase = 'Waning crescent';
    moonIcon = IMAGES.waningCrescentIcon;
  } else if (moonData <= 0.28) {
    score += 2;
    moonPhase = 'First quarter';
    moonIcon = IMAGES.firstQuarterIcon;
  } else if (moonData >= 0.73) {
    score += 2;
    moonPhase = 'Third quarter';
    moonIcon = IMAGES.thirdQuarterIcon;
  } else if (moonData <= 0.42) {
    score += 0.5;
    moonPhase = 'Waxing gibbous';
    moonIcon = IMAGES.waxingGibbousIcon;
  } else if (moonData >= 0.57) {
    score += 0.5;
    moonPhase = 'Waning gibbous';
    moonIcon = IMAGES.waningGibbousIcon;
  }

  // Average score
  let condition = 'N/A';
  if ((score / 4) >= 2.5) {
    condition = 'Great';
  } else if ((score / 4) >= 1.5) {
    condition = 'Good';
  } else if ((score / 4) >= 1) {
    condition = 'Fair';
  } else {
    condition = 'Poor';
  }

  // Wind
  let windDir = 'NNW';
  if (dayData.wdir < 11.3 || dayData.wdir >= 348.8) {
    windDir = 'N';
  } else if (dayData.wdir < 33.8) {
    windDir = 'NNE';
  } else if (dayData.wdir < 56.3) {
    windDir = 'NE';
  } else if (dayData.wdir < 78.8) {
    windDir = 'ENE';
  } else if (dayData.wdir < 101.3) {
    windDir = 'E';
  } else if (dayData.wdir < 123.8) {
    windDir = 'ESE';
  } else if (dayData.wdir < 146.3) {
    windDir = 'SE';
  } else if (dayData.wdir < 168.8) {
    windDir = 'SSE';
  } else if (dayData.wdir < 191.3) {
    windDir = 'S';
  } else if (dayData.wdir < 213.8) {
    windDir = 'SSW';
  } else if (dayData.wdir < 236.3) {
    windDir = 'SW';
  } else if (dayData.wdir < 258.8) {
    windDir = 'WSW';
  } else if (dayData.wdir < 281.3) {
    windDir = 'W';
  } else if (dayData.wdir < 303.8) {
    windDir = 'WNW';
  } else if (dayData.wdir < 326.3) {
    windDir = 'NW';
  } else if (dayData.wdir < 348.8) {
    windDir = 'NNW';
  }

  return (
    <div className={`forecastWidget ${coverClass}`}>
      <small className="date">{date}</small>
      <div className="qualityAndTemp">
        <h2>{condition}</h2>
        <h3>
          {Math.floor(dayData.temp)}
          °F
        </h3>
      </div>
      <div className="futureStats">
        <img alt={cloudCover} className="forecastWeatherIcon" src={cloudCoverIcon} />
        <p>{cloudCover}</p>
        <img alt={moonPhase} className="forecastWeatherIcon" src={moonIcon} />
        <p>{moonPhase}</p>
        <img alt="Wind" className="forecastWeatherIcon" src={IMAGES.windIcon} />
        <p>
          {windDir}
          &nbsp;&nbsp;&nbsp;
          {Math.round(dayData.wspd)}
          mph
        </p>
      </div>
    </div>
  );
}

export default ForecastDay;

ForecastDay.propTypes = {
  dayData: PropTypes.shape.isRequired,
  moonData: PropTypes.number.isRequired,
};
