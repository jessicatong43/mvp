import React from 'react';
import bgStarrySky from '../../dist/assets/bgStarrySky.jpg';
import bgCloudySky from '../../dist/assets/bgCloudySky.jpg';
import clearSkyIcon from '../../dist/assets/weatherIcons/Clear Sky icon.png';
import cloudyIcon from '../../dist/assets/weatherIcons/Cloudy icon.png';
import firstQuarterIcon from '../../dist/assets/weatherIcons/First Quarter icon.png';
import fullMoonIcon from '../../dist/assets/weatherIcons/Full Moon icon.png';
import humidityIcon from '../../dist/assets/weatherIcons/Humidity icon.png';
import newMoonIcon from '../../dist/assets/weatherIcons/New Moon icon.png';
import partlyCloudyIcon from '../../dist/assets/weatherIcons/Partly Cloudy icon.png';
import rainIcon from '../../dist/assets/weatherIcons/Rain icon.png';
import sunriseIcon from '../../dist/assets/weatherIcons/Sunrise icon.png';
import sunsetIcon from '../../dist/assets/weatherIcons/Sunset icon.png';
import temperatureIcon from '../../dist/assets/weatherIcons/Temperature icon.png';
import thirdQuarterIcon from '../../dist/assets/weatherIcons/Third Quarter icon.png';
import waningCrescentIcon from '../../dist/assets/weatherIcons/Waning Crescent icon.png';
import waningGibbousIcon from '../../dist/assets/weatherIcons/Waning Gibbous icon.png';
import waxingCrescentIcon from '../../dist/assets/weatherIcons/Waxing Crescent icon.png';
import waxingGibbousIcon from '../../dist/assets/weatherIcons/Waxing Gibbous icon.png';
import windIcon from '../../dist/assets/weatherIcons/Wind icon.png';

function Today() {
  // Code here

  return (
    <div id="today">
      <div className="qualityAndTemp">
        <h2>Great</h2>
        <h3>53°F</h3>
      </div>
      <div className="stats">
        <img alt="Clear Sky" className="weatherIcon" src={clearSkyIcon} />
        <p>Clear skies</p>
        <img alt="Wind" className="weatherIcon" src={windIcon} />
        <p>ENE 9mph</p>
        <img alt="Sunset" className="weatherIcon" src={sunsetIcon} />
        <p>7:46PM</p>
        <img alt="Waxing cresent" className="weatherIcon" src={waxingCrescentIcon} />
        <p>Waxing crescent</p>
        <img alt="Humidity" className="weatherIcon" src={humidityIcon} />
        <p>76%</p>
        <img alt="Sunrise" className="weatherIcon" src={sunriseIcon} />
        <p>6:30AM</p>
      </div>
    </div>
  );
}

export default Today;
