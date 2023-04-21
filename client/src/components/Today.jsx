import React from 'react';
import PropTypes from 'prop-types';
import IMAGES from '../../dist/assets/images/index';

function Today({ data, location }) {
  console.log('Today data: ', data);
  console.log('Today location: ', location);
  const todayData = data[location][0];
  const { moonData } = data;
  let score = 0;

  function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${amOrPm}`;
  }

  const sunriseTime = formatTime(new Date(data.sunrise));
  const sunsetTime = formatTime(new Date(data.sunset));

  // Cloud cover
  let cloudCover = 'Cloudy';
  let cloudCoverIcon = IMAGES.cloudyIcon;
  let coverClass = 'cloudy';
  if (todayData.cloudcover <= 20) {
    score += 4.5;
    cloudCover = 'Clear skies';
    cloudCoverIcon = IMAGES.clearSkyIcon;
    coverClass = 'clear';
  } else if (todayData.cloudcover <= 35) {
    score += 2.5;
    cloudCover = 'Partly cloudy';
    cloudCoverIcon = IMAGES.partlyCloudyIcon;
    coverClass = 'partlyCloudy';
  } else if (todayData.cloudcover <= 50) {
    score += 1;
  }

  // Humdity
  if (todayData.humidity <= 45) {
    score += 3;
  } else if (todayData.humidity <= 55) {
    score += 1.5;
  }

  // Visibility
  if (todayData.visibility >= 8) {
    score += 2;
  } else if (todayData.visibility >= 6) {
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
  } else if ((score / 4) >= 1.75) {
    condition = 'Good';
  } else if ((score / 4) >= 1) {
    condition = 'Fair';
  } else {
    condition = 'Poor';
  }

  // Wind
  let windDir = 'NNW';
  if (todayData.wdir < 11.3 || todayData.wdir >= 348.8) {
    windDir = 'N';
  } else if (todayData.wdir < 33.8) {
    windDir = 'NNE';
  } else if (todayData.wdir < 56.3) {
    windDir = 'NE';
  } else if (todayData.wdir < 78.8) {
    windDir = 'ENE';
  } else if (todayData.wdir < 101.3) {
    windDir = 'E';
  } else if (todayData.wdir < 123.8) {
    windDir = 'ESE';
  } else if (todayData.wdir < 146.3) {
    windDir = 'SE';
  } else if (todayData.wdir < 168.8) {
    windDir = 'SSE';
  } else if (todayData.wdir < 191.3) {
    windDir = 'S';
  } else if (todayData.wdir < 213.8) {
    windDir = 'SSW';
  } else if (todayData.wdir < 236.3) {
    windDir = 'SW';
  } else if (todayData.wdir < 258.8) {
    windDir = 'WSW';
  } else if (todayData.wdir < 281.3) {
    windDir = 'W';
  } else if (todayData.wdir < 303.8) {
    windDir = 'WNW';
  } else if (todayData.wdir < 326.3) {
    windDir = 'NW';
  } else if (todayData.wdir < 348.8) {
    windDir = 'NNW';
  }

  return (
    <div className={`todayWidget ${coverClass}`}>
      <div className="qualityAndTemp">
        <h2>{condition}</h2>
        <h3>
          {Math.floor(todayData.temp)}
          °F
        </h3>
      </div>
      <div className="todayStats">
        <img alt={cloudCover} className="forecastWeatherIcon" src={cloudCoverIcon} />
        <p>{cloudCover}</p>
        <img alt="Wind" className="forecastWeatherIcon" src={IMAGES.windIcon} />
        <p>
          {windDir}
          &nbsp;&nbsp;&nbsp;
          {Math.round(todayData.wspd)}
          mph
        </p>
        <img alt="Sunset" className="todayWeatherIcon" src={IMAGES.sunsetIcon} />
        <p>{sunsetTime}</p>
        <img alt={moonPhase} className="forecastWeatherIcon" src={moonIcon} />
        <p>{moonPhase}</p>
        <img alt="Humidity" className="todayWeatherIcon" src={IMAGES.humidityIcon} />
        <p>
          {Math.round(todayData.humidity)}
          %
        </p>
        <img alt="Sunrise" className="todayWeatherIcon" src={IMAGES.sunriseIcon} />
        <p>{sunriseTime}</p>
      </div>
    </div>
  );
}

export default Today;

Today.propTypes = {
  data: PropTypes.shape.isRequired,
  location: PropTypes.string.isRequired,
};
