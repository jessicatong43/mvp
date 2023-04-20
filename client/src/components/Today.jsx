import React from 'react';
import IMAGES from '../../dist/assets/images/index';

function Today() {
  return (
    <div id="todayWidget">
      <div className="qualityAndTemp">
        <h2>Great</h2>
        <h3>53°F</h3>
      </div>
      <div className="stats">
        <img alt="Clear Sky" className="weatherIcon" src={IMAGES.clearSkyIcon} />
        <p>Clear skies</p>
        <img alt="Wind" className="weatherIcon" src={IMAGES.windIcon} />
        <p>ENE 9mph</p>
        <img alt="Sunset" className="weatherIcon" src={IMAGES.sunsetIcon} />
        <p>7:46PM</p>
        <img alt="Waxing cresent" className="weatherIcon" src={IMAGES.waxingCrescentIcon} />
        <p>Waxing crescent</p>
        <img alt="Humidity" className="weatherIcon" src={IMAGES.humidityIcon} />
        <p>76%</p>
        <img alt="Sunrise" className="weatherIcon" src={IMAGES.sunriseIcon} />
        <p>6:30AM</p>
      </div>
    </div>
  );
}

export default Today;
