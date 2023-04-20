import React from 'react';
import IMAGES from '../../dist/assets/images/index';

function Today() {
  return (
    <div id="todayWidget">
      <div className="qualityAndTemp">
        <h2>Great</h2>
        <h3>53°F</h3>
      </div>
      <div className="todayStats">
        <img alt="Clear Sky" className="todayWeatherIcon" src={IMAGES.clearSkyIcon} />
        <p>Clear skies</p>
        <img alt="Wind" className="todayWeatherIcon" src={IMAGES.windIcon} />
        <p>ENE 9mph</p>
        <img alt="Sunset" className="todayWeatherIcon" src={IMAGES.sunsetIcon} />
        <p>7:46PM</p>
        <img alt="Waxing cresent" className="todayWeatherIcon" src={IMAGES.waxingCrescentIcon} />
        <p>Waxing crescent</p>
        <img alt="Humidity" className="todayWeatherIcon" src={IMAGES.humidityIcon} />
        <p>76%</p>
        <img alt="Sunrise" className="todayWeatherIcon" src={IMAGES.sunriseIcon} />
        <p>6:30AM</p>
      </div>
    </div>
  );
}

export default Today;
